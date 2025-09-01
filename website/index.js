//Lambda function trigger

const counter = document.querySelector(".counter");

async function updateCounter() {
    console.log("Fetching view count...");
    let response = await fetch("https://eh5jowowfvhxi4eqcvvfn7j57u0skffr.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    console.log("Data received:", data);
    counter.innerHTML = `Views: ${data}`;
  }
