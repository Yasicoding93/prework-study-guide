const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
  for (let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
 }
 
 function selectTopic() {
  if (randomtopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomtopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomtopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomtopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
 }
 console.log('Here are the topics we learned through Prework:');
 listTopics();
 console.log('Which topic should we study first?');
 selectTopic();


