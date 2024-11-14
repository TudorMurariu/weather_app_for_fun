function dateBuilder(data : any) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    let day = days[data.getDay()];
    let date = data.getDate();
    let month = months[data.getMonth()];
  
    return `${day} ${date} ${month}`;
  }
  
  export default dateBuilder;