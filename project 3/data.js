// Sample data. Edit, add or delete items and the pages update automatically.
// "color" is a stand-in for a photo. To use real photos, add  img: "photos/climb.jpg"
// and swap the .pic div in main.js for an <img> tag.
var events = [
  { id: "e1", title: "Sunday Climbing Session", cat: "Outdoor", date: "Sun 9:00 AM", place: "Hangar 18, Hawthorne",
    going: 24, price: 0, host: "Weekend Climbers Collective", solo: true, beginner: true, color: "#A7A99A" },
  { id: "e2", title: "Community Pottery Night", cat: "Arts", date: "Wed 6:30 PM", place: "Clay Studio, Silver Lake",
    going: 12, price: 25, host: "Mud & Friends", solo: true, beginner: true, color: "#C56B48" },
  { id: "e3", title: "The Sunday Social", cat: "Games", date: "Sun 2:00 PM", place: "Dice Haus, Echo Park",
    going: 40, price: 0, host: "LA Board Game Society", solo: true, beginner: true, color: "#D5B86B" },
  { id: "e4", title: "Neighborhood Photography Walk", cat: "Arts", date: "Sat 8:00 AM", place: "Downtown LA",
    going: 18, price: 0, host: "LA Film Photography Club", solo: true, beginner: false, color: "#343B30" },
  { id: "e5", title: "Weekend Hiking Group", cat: "Outdoor", date: "Sat 7:30 AM", place: "Griffith Park",
    going: 31, price: 0, host: "Trailheads LA", solo: false, beginner: true, color: "#A7A99A" },
  { id: "e6", title: "Community Garden Volunteer Day", cat: "Community", date: "Sun 10:00 AM", place: "Elysian Valley",
    going: 15, price: 0, host: "Neighborhood Garden Collective", solo: true, beginner: true, color: "#C56B48" }
];

var communities = [
  { id: "c1", name: "The LA Film Photography Club", cat: "Arts", place: "Los Angeles", members: 86, meets: "Weekly",
    about: "Casual shooters who love film and exploring the city.", color: "#343B30" },
  { id: "c2", name: "Sunday Morning Run Club", cat: "Outdoor", place: "Venice", members: 212, meets: "Weekly",
    about: "All paces. Coffee after.", color: "#C56B48" },
  { id: "c3", name: "Neighborhood Garden Collective", cat: "Community", place: "Elysian Valley", members: 64, meets: "Twice monthly",
    about: "Grow things, share things.", color: "#A7A99A" },
  { id: "c4", name: "Los Angeles Board Game Society", cat: "Games", place: "Echo Park", members: 340, meets: "Weekly",
    about: "Heavy strategy to party games.", color: "#D5B86B" }
];

// Home page category tiles
var categories = [
  { key: "Arts", title: "Arts & Making", text: "Pottery, painting, photography, crafts", color: "#C56B48" },
  { key: "Outdoor", title: "Outdoor & Adventure", text: "Climbing, hiking, cycling, running", color: "#343B30" },
  { key: "Games", title: "Games & Play", text: "Board games, trivia, rec sports", color: "#A7A99A" },
  { key: "Music", title: "Music & Culture", text: "Concerts, jam sessions, dance, film", color: "#C56B48" },
  { key: "Community", title: "Community & Volunteering", text: "Gardening and local causes", color: "#343B30" },
  { key: "Food", title: "Food & Cooking", text: "Classes, food clubs, tastings", color: "#A7A99A" }
];