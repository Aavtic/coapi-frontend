const button = document.querySelector("button");
const codeBox = document.querySelector("textarea");
const output = document.querySelector(".outputext");


button.onclick = () => {
const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");


    const myCode = codeBox.value;

    const myJson = {
        "code" : myCode,
        "language": "Python"
    };

    const request = new Request(
          "http://127.0.0.1:8081/api/v1", {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(myJson),
      }
    )

    fetch(request)
      .then((response) => {
          if (response.status === 200) {
              return response.text();
          } else {
              throw new Error("API request failed!");
          }
      })
    .then((data) => {
        console.log(data);
        displayOutput(data);
    })
    .catch((error) => {
        console.error(error);
    });
}

function displayOutput(output_text) {
    output.textContent = output_text;
}



