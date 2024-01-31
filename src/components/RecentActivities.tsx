import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

const RecentActivities = () => {
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchRecentActivities = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/account/20738791/rated/movies?language=pt&page=1&sort_by=created_at.asc',
          {
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTViNzJjMDhlODYzOTFjMTM3NTQxYjIyODM0M2QxYyIsInN1YiI6IjY1NWZhZGYxMmIxMTNkMDEyZDAxY2Q5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6-TbM4Fpl6EFDxfR_4Gt-BH77NRB2tC9Kp2m4yAMxc'
            }
          }
        );
        setRecentActivities(response.data.results);
      } catch (error) {
        console.error('Error fetching recent activities:', error);
      }
    };

    fetchRecentActivities();
  }, []);

  return (
    <div>
    <h2>Recent Activities</h2>
    <IonGrid>
      <IonRow>
        {recentActivities.map((activity) => (
          <IonCol size="6" key={activity.id}>
            <div>
              <h3>{activity.title}</h3>
              <p class="ion-text-wrap">{activity.overview}</p>
              <p>Rating: {activity.rating}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${activity.poster_path}`}
                alt={activity.title}
                style={{ objectFit: 'cover', height: '300px' }}
                className='ion-float-left'
              />
            </div>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  </div>
);
};

export default RecentActivities;
