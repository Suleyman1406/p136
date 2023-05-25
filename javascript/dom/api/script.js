// let response = fetch("https://northwind.vercel.app/api/products/");

// console.log(response);

// fetch("https://northwind.vercel.app/api/suppliers/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data.sort((a, b) => a.id - b.id));
//     console.log(data);
//   });

const tBody = document.querySelector("tbody");

async function getData() {
  let response = await fetch("https://northwind.vercel.app/api/suppliers/");
  let data = await response.json();
  tBody.innerHTML = "";

  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${item.id ?? "-"}</td>
    <td>${item.companyName ?? "-"}</td>
    <td>${item.contactTitle ?? "-"}</td>
    `;
    const td = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    td.append(deleteBtn);
    tr.append(td);

    deleteBtn.addEventListener("click", () => {
      console.log(item.id);
      fetch(`https://northwind.vercel.app/api/suppliers/${item.id}`, {
        method: "DELETE",
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          tr.remove();
          //   // getData();
        }
      });
    });

    tBody.append(tr);
  });
}

// getData();
// (() => {
//   console.log("test");
// })();

// getData().then(res=>console.log(res););
// await getData();

function addSuplier(companyName, contanctTitle, contactName) {
  fetch("https://northwind.vercel.app/api/suppliers/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      companyName: companyName,
      contactTitle: contanctTitle,
      contactName: contactName,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      tBody.innerHTML += `
        <tr>
          <td>${data.id}</td>
          <td>${data.companyName}</td>
          <td>${data.contactName}</td>
        </tr>
      `;
    });
}

// addSuplier("Nici", "SENIOR FRONTEND DEVELOPER", "Nicat");
getData();

// async function editSupplier(id, companyName, contanctTitle, contactName) {
//   const response = await fetch(
//     `https://northwind.vercel.app/api/suppliers/${id}`,
//     {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         companyName: companyName,
//         contactTitle: contanctTitle,
//         contactName: contactName,
//       }),
//     }
//   );

//   console.log(response);
// }

// editSupplier(31, "Heci", "Junior", "HeciNici");
