import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Correct JSON parser
app.use(express.urlencoded({ extended: true })); // For form data


// Database connection configuration
const db = {
  host: "localhost",
  user: "root",
  password: 'root',
  database: 'weather'
};

// Function to create a new MySQL connection
async function createConnection() {
  const connection = await mysql.createConnection(db);
  return connection;
}

// GET all city weather
app.get("/", async (req, res) => {
  const query = "SELECT * FROM city_weather";
  const connection = await createConnection();

  try {
    const [result] = await connection.execute(query);
    res.json(result);
  } catch (err) {
    console.error('Error fetching all city weather:', err);
    res.status(500).json({ error: 'Database error' });
  } finally {
    connection.end(); // Always close the connection after the query
  }
});

// GET weather of a specific city and save the search in history
app.get("/:city", async (req, res) => {
  const city = req.params.city;
  const connection = await createConnection();

  try {
    // Fetch weather details for the city
    const [weatherResult] = await connection.execute(
      'SELECT temperature, humidity, weather FROM city_weather WHERE city_name = ?',
      [city]
    );

    if (weatherResult.length === 0) {
      return res.status(204).json("City not found");
    }

    // Save the city search to the search_history table
    const insertQuery = 'INSERT INTO search_history (city_name, last_updated) VALUES (?, NOW())';
    await connection.execute(insertQuery, [city]);

    res.status(200).json(weatherResult[0]); // Return the weather data
  } catch (error) {
    console.error('Error fetching weather or saving search:', error);
    res.status(500).json({ error: 'Database error' });
  } finally {
    connection.end(); // Close the connection after the query
  }
});

// POST: Save city search to search_history
// app.post('/history', async (req, res) => {
//   const { city_name } = req.body;

//   if (!city_name) {
//     return res.status(400).json({ error: 'city_name is required' });
//   }

//   const connection = await createConnection();

//   try {
//     const query = 'INSERT INTO search_history (city_name, last_updated) VALUES (?, NOW())';
//     await connection.execute(query, [city_name]);

//     res.status(201).json({ message: 'Search history saved' });
//   } catch (error) {
//     console.error('Error saving search history:', error);
//     res.status(500).json({ error: 'Database error' });
//   } finally {
//     connection.end(); // Close the connection
//   }
// });
app.post('/history', async (req, res) => {
  const { city_name } = req.body;

  if (!city_name) {
    return res.status(400).json({ error: 'city_name is required' });
  }

  const connection = await createConnection();

  try {
    const query = 'INSERT INTO search_history (city_name, last_updated) VALUES (?, NOW())';
    const [result] = await connection.execute(query, [city_name]);

    if (result.affectedRows > 0) {
      res.status(201).json({ message: 'Search history saved' });
    } else {
      res.status(500).json({ error: 'Failed to save search history' });
    }
  } catch (error) {
    console.error('Error saving search history:', error);
    res.status(500).json({ error: 'Database error' });
  } finally {
    connection.end(); // Close the connection
  }
});


// GET: Retrieve search history
// app.get("/:search", async (req, res) => {
//   const query = "SELECT * FROM search_history"; // Fetch search history with most recent searches first
//   const connection = await createConnection();

//   try {
//     const [result] = await connection.execute(query);
//     res.json(result); // Return the search history results
//   } catch (err) {
//     console.error('Error fetching search history:', err);
//     res.status(500).json({ error: 'Database error' });
//   } finally {
//     connection.end(); // Close the connection
//   }
// });
app.get("/history", async (req, res) => {
  const query = "SELECT * FROM search_history ORDER BY last_updated DESC"; // optional ordering
  const connection = await createConnection();

  try {
    const [result] = await connection.execute(query);

    if (result.length === 0) {
      console.log("No search history found.");
    }

    res.status(200).json(result);
  } catch (err) {
    console.error('Error fetching search history:', err);
    res.status(500).json({ error: 'Database error', details: err.message });
  } finally {
    connection.end();
  }
});





// Start the server
const port = 9099;
app.listen(port, () => {
  console.log(`Weather app started on port ${port}`);
});
































































