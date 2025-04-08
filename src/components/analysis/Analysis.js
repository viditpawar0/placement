import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import csv from 'csvtojson';
import dataFile from '../../data/placedata v2.0 synthetic.csv';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function Analysis() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataFile);
      const csvText = await response.text();
      const jsonData = await csv().fromString(csvText);

      // Process data for charts
      const placedCount = jsonData.filter((row) => row.PlacementStatus === 'Placed').length;
      const notPlacedCount = jsonData.filter((row) => row.PlacementStatus === 'NotPlaced').length;

      const internshipParticipation = jsonData.filter((row) => parseInt(row.Internships) > 0).length;
      const noInternshipParticipation = jsonData.length - internshipParticipation;

      const extracurricularYes = jsonData.filter((row) => row.ExtracurricularActivities === 'Yes').length;
      const extracurricularNo = jsonData.length - extracurricularYes;

      const placementTrainingYes = jsonData.filter((row) => row.PlacementTraining === 'Yes').length;
      const placementTrainingNo = jsonData.length - placementTrainingYes;

      const projectsDistribution = Array(6).fill(0); // Buckets for 0-5 projects
      jsonData.forEach((row) => {
        const projects = Math.min(parseInt(row.Projects), 5);
        projectsDistribution[projects]++;
      });

      const workshopsDistribution = Array(6).fill(0); // Buckets for 0-5 workshops
      jsonData.forEach((row) => {
        const workshops = Math.min(parseInt(row['Workshops/Certifications']), 5);
        workshopsDistribution[workshops]++;
      });

      const sscMarks = jsonData.map((row) => parseFloat(row.SSC_Marks));
      const hscMarks = jsonData.map((row) => parseFloat(row.HSC_Marks));

      const extracurricularPlacement = {
        Yes: {
          Placed: (jsonData.filter((row) => row.ExtracurricularActivities === 'Yes' && row.PlacementStatus === 'Placed').length / extracurricularYes) * 100,
          NotPlaced: (jsonData.filter((row) => row.ExtracurricularActivities === 'Yes' && row.PlacementStatus === 'NotPlaced').length / extracurricularYes) * 100,
        },
        No: {
          Placed: (jsonData.filter((row) => row.ExtracurricularActivities === 'No' && row.PlacementStatus === 'Placed').length / extracurricularNo) * 100,
          NotPlaced: (jsonData.filter((row) => row.ExtracurricularActivities === 'No' && row.PlacementStatus === 'NotPlaced').length / extracurricularNo) * 100,
        },
      };

      const extracurricularPlacementData = {
        labels: ['Yes', 'No'],
        datasets: [
          {
            label: 'Placed',
            data: [extracurricularPlacement.Yes.Placed, extracurricularPlacement.No.Placed],
            backgroundColor: '#4caf50',
          },
          {
            label: 'Not Placed',
            data: [extracurricularPlacement.Yes.NotPlaced, extracurricularPlacement.No.NotPlaced],
            backgroundColor: '#f44336',
          },
        ],
      };

      const placementTrainingData = {
        labels: ['Yes', 'No'],
        datasets: [
          {
            label: 'Placed',
            data: [
              jsonData.filter((row) => row.PlacementTraining === 'Yes' && row.PlacementStatus === 'Placed').length,
              jsonData.filter((row) => row.PlacementTraining === 'No' && row.PlacementStatus === 'Placed').length,
            ],
            backgroundColor: '#4caf50',
          },
          {
            label: 'Not Placed',
            data: [
              jsonData.filter((row) => row.PlacementTraining === 'Yes' && row.PlacementStatus === 'NotPlaced').length,
              jsonData.filter((row) => row.PlacementTraining === 'No' && row.PlacementStatus === 'NotPlaced').length,
            ],
            backgroundColor: '#f44336',
          },
        ],
      };

      setChartData({
        placementStatus: {
          labels: ['Placed', 'Not Placed'],
          datasets: [
            {
              label: 'Placement Status',
              data: [placedCount, notPlacedCount],
              backgroundColor: ['#4caf50', '#f44336'],
            },
          ],
        },
        internships: {
          labels: ['With Internships', 'Without Internships'],
          datasets: [
            {
              label: 'Internship Participation',
              data: [internshipParticipation, noInternshipParticipation],
              backgroundColor: ['#ff9800', '#9e9e9e'],
            },
          ],
        },
        extracurricular: {
          labels: ['Yes', 'No'],
          datasets: [
            {
              label: 'Extracurricular Activities',
              data: [extracurricularYes, extracurricularNo],
              backgroundColor: ['#03a9f4', '#e91e63'],
            },
          ],
        },
        placementTraining: {
          labels: ['Yes', 'No'],
          datasets: [
            {
              label: 'Placement Training Participation',
              data: [placementTrainingYes, placementTrainingNo],
              backgroundColor: ['#8bc34a', '#cddc39'],
            },
          ],
        },
        extracurricularPlacement: extracurricularPlacementData,
        placementTrainingGrouped: placementTrainingData,
      });
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="analysis-container">
      <h2>Comprehensive Analysis Report</h2>
      <div className="chart">
        <h3>Placement Status</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '500px', height: '500px' }}>
            <Pie data={chartData.placementStatus} />
          </div>
        </div>
        <p>
          This chart shows the proportion of students who were placed versus those who were not placed. 
          It highlights the overall placement success rate.
        </p>
      </div>
      <div className="chart">
        <h3>Internship Participation</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '500px', height: '500px' }}>
            <Pie data={chartData.internships} />
          </div>
        </div>
        <p>
          This chart illustrates the number of students who participated in internships compared to those who did not. 
          It provides insights into the role of internships in placement outcomes.
        </p>
      </div>
      <div className="chart">
        <h3>Extracurricular Activities</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '500px', height: '500px' }}>
            <Pie data={chartData.extracurricular} />
          </div>
        </div>
        <p>
          This chart represents the distribution of students who participated in extracurricular activities versus those who did not. 
          It helps analyze the impact of extracurricular involvement on placements.
        </p>
      </div>
      <div className="chart">
        <h3>Placement Training Participation</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '500px', height: '500px' }}>
            <Pie data={chartData.placementTraining} />
          </div>
        </div>
        <p>
          This chart shows the number of students who participated in placement training programs compared to those who did not. 
          It highlights the importance of training in securing placements.
        </p>
      </div>
      <div className="chart">
        <h3>Placement Status by Extracurricular Activities</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '500px', height: '500px' }}>
            <Bar
              data={chartData.extracurricularPlacement}
              options={{
                plugins: {
                  legend: { position: 'top' },
                },
                responsive: true,
                scales: {
                  x: { stacked: true },
                  y: { stacked: true },
                },
              }}
            />
          </div>
        </div>
        <p>
          This bar chart compares the placement status of students based on their participation in extracurricular activities. 
          It provides a detailed view of how extracurricular involvement correlates with placement outcomes.
        </p>
      </div>
      <div className="chart">
        <h3>Placement Training vs Placement Status</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '500px', height: '500px' }}>
            <Bar
              data={chartData.placementTrainingGrouped}
              options={{
                plugins: {
                  legend: { position: 'top' },
                },
                responsive: true,
                scales: {
                  x: { stacked: false },
                  y: { stacked: false },
                },
              }}
            />
          </div>
        </div>
        <p>
          This bar chart analyzes the relationship between placement training participation and placement status. 
          It helps understand the effectiveness of training programs in improving placement rates.
        </p>
      </div>
    </div>
  );
}

export default Analysis;
