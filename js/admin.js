follow=document.getElementById('followers').innerText=Math.floor(Math.random()*100000)+1
document.getElementById('subscribe').innerText=Math.floor(Math.random()*100000)+1
document.getElementById('likes').innerText=Math.floor(Math.random()*100000)+1
document.getElementById('messages').innerText=Math.floor(Math.random()*1000)+5

const instagram=Math.floor(Math.random()*1000)
const facebook=Math.floor(Math.random()*1000)
const snapchat=Math.floor(Math.random()*1000)
const linkedIn=Math.floor(Math.random()*1000)
let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
//pie chart
const ctx = document.getElementById('socialMediaChart');
const data = {
    labels: ['Facebook', 'Instagram', 'Snapchat', 'LinkedIn'],
    datasets: [{
        label: 'Engagements',
        data: [facebook, instagram ,snapchat,linkedIn],
        backgroundColor: [
            'rgb(59, 99, 200)', // Facebook blue
            'rgb(195, 42, 163)', // Instagram purple
            'rgb(226, 223, 41)', // Twitter blue
            'rgba(0, 119, 181)' // LinkedIn blue
        ],

        hoverBorderColor: "rgba(234, 236, 244, 1)",
        hoverOffset:10
    }],
    options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: '#dddfeb',
          borderWidth: 2,
      
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
            display: true
          },
          cutoutPercentage: 70,
        },
      }
const socialMediaChart = new Chart(ctx, {
    type: 'pie',
    data: data,
});
//line Chart
const xValues = ["Jan","Feb","March","April","May","June","July","Aug","Oct","Nov","Dec"];

new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478,1223],
      label:'Followers',
      borderColor: "red",
      fill: true
    },{
      data: [1600,1700,6700,1900,2000,700,4000,5000,6000,7000,2452],
      label:'Likes',
      borderColor: "green",
      fill: true
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100,1523],
      borderColor: "blue",
      label:'Messages',
      fill: false
    }]
  },
  options: {
    legend: {display: true}
  }
});
//bar chart
const xValue = ["Instagram", "Facebook", "Snapchat", "LinkedIn" ];
const yValues = [122, 45, 68,10];
const barColors = ["magenta", "blue","yellow","darkBlue"];
new Chart("barChart", {
  type: "bar",
  data: {
    labels: xValue,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Messages and Dms"
    }
  }
});