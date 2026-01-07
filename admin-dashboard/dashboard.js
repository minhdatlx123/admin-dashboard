// check user authen

const checkUserToken = () => {
    const token = window.localStorage.getItem('accessToken')
    fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
    'Authorization': 'Bearer ' + token, // Pass JWT via Authorization header
    }, 

    })
    .then(res => {
        if (res.status !== 200){
            const token = window.localStorage.removeItem('accessToken');
            throw new Error('Token verify failed');
        }
    })
    .then(console.log)
    .catch((e)=> {
        window.location.href ="/index.html"
    });
}
checkUserToken();

// made chart
//line chart
const totalBookingCtx = document.querySelector('#totalBookingsCanvas').getContext('2d');
const userRegistration = document.querySelector('#userRegistration').getContext('2d');
const todaylBookings = document.querySelector('#todayBookings').getContext('2d');
const gradient = totalBookingCtx.createLinearGradient (0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(255, 0, 0, 0.3)');
      gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.4)');  
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  // 
  new Chart(totalBookingCtx, {
    type: 'line',
    data: {
      labels: ['mar 1', 'mar 2', 'mar 3', 'mar 4', 'mar 5', 'mar 6', 'mar 7'],
      datasets: [{
        data: [120, 150, 180, 200, 170, 220, 260],
        backgroundColor: gradient,
        borderColor: 'red',
        borderWidth: 2,
        fill: true,
        tension: 0.2
      }]
    },
    options: {
      plugin: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          display: false
        },
        x: {
          display: false
        }
      }
    }
  });
 //User registration chart
  new Chart(userRegistration, {
    type: 'line',
    data: {
      labels: ['item1', 'item2', 'item3', 'item4'],
      datasets: [{
        data: [2, 3, 4, 5],
        backgroundColor: gradient,
        borderColor: 'red',
        borderWidth: 2,
        fill: true,
        tension: 0.1
      }]
    },
    options: {
      plugin: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          display: false
        },
        x: {
          display: false
        }
      }
    }
  });
  // today booking chart
new Chart(todaylBookings, {
    type: 'bar',
    data: {
      labels: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5'],
      datasets: [{
        data: [1200,1100,1400,1550,1600],
        backgroundColor: gradient,
        borderColor: 'red',
        borderWidth: 1
      }]
    },
     options: {
      plugin: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          display: false
        },
        x: {
          display: false
        }
      }
    }
  });



  //doughnut chart
  new Chart(document.getElementById('topMoviesChart'), {
    type: 'doughnut',
    data: {
      labels: ["Doctor Strange", "Avengers", "Batman", "Spider-Man"],
      datasets: [{
        data: [1340, 980, 760, 540],
        backgroundColor: ['#ff6374', '#36a2eb', '#ffce34', '#4bc0c0'],
      }]
    },   
    options: {
      spacing: 10,
      borderRadius:5,
      cutout: 80,
    }
  });