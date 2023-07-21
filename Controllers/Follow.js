app.post('/follow', async (req, res) => {
  try {
    const { follower_id, following_id } = req.body;

    // Check if the relationship already exists
    const [rows] = await pool.query('SELECT id FROM follows WHERE follower_id = ? AND following_id = ?', [follower_id, following_id]);
    if (rows.length > 0) {
      return res.status(409).json({ message: 'Relationship already exists.' });
    }

    // Create a new relationship
    await pool.query('INSERT INTO follows (follower_id, following_id) VALUES (?, ?)', [follower_id, following_id]);
    return res.status(200).json({ message: 'Successfully followed user.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Unfollow a user
app.delete('/unfollow', async (req, res) => {
  try {
    const { follower_id, following_id } = req.body;

    // Check if the relationship exists
    const [rows] = await pool.query('SELECT id FROM follows WHERE follower_id = ? AND following_id = ?', [follower_id, following_id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Relationship does not exist.' });
    }

    // Delete the relationship
    await pool.query('DELETE FROM follows WHERE follower_id = ? AND following_id = ?', [follower_id, following_id]);
    return res.status(200).json({ message: 'Successfully unfollowed user.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Check if a user follows another user
app.get('/checkfollow', async (req, res) => {
  try {
    const { follower_id, following_id } = req.query;

    // Check if the relationship exists
    const [rows] = await pool.query('SELECT id FROM follows WHERE follower_id = ? AND following_id = ?', [follower_id, following_id]);
    if (rows.length > 0) {
      return res.status(200).json({ follows: true });
    } else {
      return res.status(200).json({ follows: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
