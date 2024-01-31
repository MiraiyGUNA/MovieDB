import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';

const PopularityVsScoreScatterChart = () => {
    const [chartData, setChartData] = useState<null | string[][]>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/movie/top_rated?language=pt&page=1&region=pt',
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization:
                                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTViNzJjMDhlODYzOTFjMTM3NTQxYjIyODM0M2QxYyIsInN1YiI6IjY1NWZhZGYxMmIxMTNkMDEyZDAxY2Q5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T6-TbM4Fpl6EFDxfR_4Gt-BH77NRB2tC9Kp2m4yAMxc',
                        },
                    }
                );

                const movies = response.data.results;

                movies.sort((a, b) => b.popularity - a.popularity);

                const data = movies.map(movie => [
                    movie.title,
                    movie.popularity,
                    movie.vote_average,
                ]);

                const chartData = [['Filme', 'Popularidade', 'Média de Votos'], ...data];

                setChartData(chartData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {chartData && (
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="ScatterChart"
                    loader={<div>Loading Chart</div>}
                    data={chartData}
                    options={{
                        title: 'Relação entre Popularidade e Média de Votos',
                        titleTextStyle: {
                            color: '#f3f3f3',
                        },
                        legend: {
                            position: 'top', 
                            textStyle: {
                              color: '#f3f3f3', 
                              fontSize: 12,   
                            },
                          },
                        hAxis: {
                            title: 'Popularidade',
                            titleTextStyle: {
                                color: '#f3f3f3',
                                fontSize: '12',
                            },
                            textStyle: {
                                color: '#f3f3f3',
                                fontSize: '9',
                            },
                        },
                        vAxis: {
                            title: 'Média de Votos',
                            titleTextStyle: {
                                color: '#f3f3f3',
                                fontSize: '12',
                            },
                            textStyle: {
                                color: '#f3f3f3',
                                fontSize: '9',
                            },
                        },
                        backgroundColor: '#1b2838',
                        series: {
                            1: { pointShape: 'diamond' },
                            0: { pointShape: 'star' },
                        }
                    }}
                />
            )}
        </div>
    );
};

export default PopularityVsScoreScatterChart;
