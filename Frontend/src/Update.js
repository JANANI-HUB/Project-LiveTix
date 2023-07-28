import React, { useState } from 'react';
import axios from 'axios';

function Update() {
  const [concertID, setConcertID] = useState('');
  const [concertName, setConcertName] = useState('');
  const [singerName, setSingerName] = useState('');
  const [genre, setGenre] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      concertid: concertID,
      concertname: concertName,
      singername: singerName,
      genre,
      date,
      time,
      location,
    };

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No JWT token found.');
      return;
    }

    try {
      
      const response = await axios.put('http://127.0.0.1:8181/put', formData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      console.log(response.data); 
      
      setConcertID('');
      setConcertName('');
      setSingerName('');
      setGenre('');
      setDate('');
      setTime('');
      setLocation('');
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <div>
      <div className="addback"></div>
      <div className="addblur">
        <div className="adddiv">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              Concert ID:
              <input
                className="ain0"
                type="text"
                placeholder="Enter concert ID"
                value={concertID}
                onChange={(e) => setConcertID(e.target.value)}
              />
            </div>
            <div className="form-group">
              Concert Name:
              <input
                className="ain1"
                type="text"
                placeholder="Enter concert name"
                value={concertName}
                onChange={(e) => setConcertName(e.target.value)}
              />
            </div>
            <div className="form-group">
              Singer Name:
              <input
                className="ain2"
                type="text"
                placeholder="Enter singer name"
                value={singerName}
                onChange={(e) => setSingerName(e.target.value)}
              />
            </div>
            <div className="form-group">
              Genre:
              <input
                className="ain3"
                type="text"
                placeholder="Enter Genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div className="form-group">
              Date:
              <input
                className="ain4"
                type="date"
                placeholder="Enter Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              Time:
              <input
                className="ain5"
                type="text"
                placeholder="Enter time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              Location:
              <input
                className="ain6"
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="addbut" type="submit">Update Concert</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;