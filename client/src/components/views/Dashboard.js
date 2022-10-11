import React from "react";
// import { e } from "react-router-dom";
// import "./Dash.css"
import { useEffect } from "react";

const name = ["nooruz", "zaman", "akhlendr", "pandey"];
const sketch = ["sketch1","sketch2","sketch3"]

export const Dashboard = (props) => {
  let bg = {
    background: "white",
  };
  const name = localStorage.getItem("name");
  console.log(name);
  // useEffect((e) => {
  //   canv(e);
  //   // Update the document title using the browser API
  //   // document.title = `You clicked ${count} times`;
  // });

  // const canv = (e)=>{

  //   window.addEventListener("load", () => {
  //     const canvas = document.querySelector("#canvas");
  //     const ctx = canvas.getContext("2d");

  //     //Resizing
  //   //   window.addEventListener("resize, ")
  //     canvas.height = 700;
  //     canvas.width = 1200;

  //     //variable
  //     let painting = false;

  //     function startPosition(){
  //       painting = true;
  //       draw(e);
  //     }

  //     function finishedPosition(){
  //       painting = false;
  //       ctx.beginPath();
  //     }

  //     function draw(e){
  //       if(!painting) return;
  //       ctx.lineWidth = 5; //line thickness
  //       ctx.lineCap = "round";
  //       ctx.strokeStyle = "blue";  //line color

  //       ctx.lineTo(e.clientX, e.clientY);
  //       ctx.stroke();
  //       ctx.beginPath();
  //       ctx.moveTo(e.clientX, e.clientY);
  //     }

  //     //EventListeners
  //     canvas.addEventListener("mousedown", startPosition);
  //     canvas.addEventListener("mouseup", finishedPosition);
  //     canvas.addEventListener("mousemove",draw);

  //   });
  //   // window.addEventListener("resize, ")
  //   console.log("hello");

  // }

  return (
    <>
      <nav class="navbar navbar-light bg-light navbar-expand-sm " style={bg}>
        {/* <a class="navbar-brand" href="#">
        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo"/>
    BootstrapBay
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
        <div class="collapse navbar-collapse" id="navbar-list-4" style={bg}>
          <ul class="navbar-nav ms-auto mx-5">
            <a class="navbar-brand " my-1 pt-3>
              {" "}
              {name}{" "}
            </a>
            <li class="nav-item dropdown navbar-right">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  // src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                  width="40"
                  height="40"
                  class="rounded-circle"
                />
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Edit Profile
                </a>
                <a class="dropdown-item" href="/login">
                  Log Out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* // sidebar */}

      {/* <iframe src="http://127.0.0.1:5500/client/public/canvas.html" bottom="100" height="800" width="1600"></iframe> */}

      {/* http://127.0.0.1:5500/client/public/canvas.html */}
      {/* </div> */}

      {/* <canvas id="canvas"></canvas> */}
      {/* <script src="canvas.js"></script> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <iframe
              src="http://127.0.0.1:5500/client/src/components/canvas/index.html"
              height="750"
              width="1400"
            ></iframe>
          </div>

          <div className="col-md-4">
            <div className="container">
              <div id="accordion1">
                <div class="card">
                  <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href=""
                    >
                      SKETCHS
                    </a>
                  </div>
                  {/* {list.map((i)=>{ */}
                  <div
                    id="description1"
                    class="collapse show"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <div class="card-body">

                        {/* working */}
                        {/* {name.map((item)=>{
                          return <li>{item}</li>
                      
                            })} */}

                          {sketch.map((item)=>(
                          <li>{item}</li>
                            ))}

                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-3">
                  <div class="card-header">
                    <a
                      class="collapsed card-link"
                      data-toggle="collapse"
                      href="#description2"
                    >
                      USERS
                    </a>
                  </div>
                  <div
                    id="description2"
                    class="collapse"
                    data-parent="#accordion"
                  >
                    <div class="card-body">

                       {name.map((item)=>{
                          return <li>{item}</li>
                      
                            })}
                      {/* Bootstrap is free and open-source collection of tools for
                      creating websites and web applications. */}
                    </div>
                  </div>
                </div>
                {/* <div class="card">
                  <div class="card-header">
                    <a
                      class="collapsed card-link"
                      data-toggle="collapse"
                      href="#description3"
                    >
                      HTML
                    </a>
                  </div>
                  <div
                    id="description3"
                    class="collapse"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      HTML stands for HyperText Markup Language. It is used to
                      design web pages using markup language.
                    </div>
                  </div>
                </div> */}
                {/* <div class="card">
                  <div class="card-header">
                    <a
                      class="collapsed card-link"
                      data-toggle="collapse"
                      href="#description4"
                    >
                      Boots
                    </a>
                  </div>
                  <div
                    id="description4"
                    class="collapse"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      Bootstrap is free and open-source collection of tools for
                      creating websites and web applications.
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="container">
<div id="accordion1 my-5">
         <div class="card">
             <div class="card-header">
                 <a class="card-link"
                     data-toggle="collapse"
                     href="#description5">
                     GeeksforGeeks
                 </a>
             </div>
             <div id="description5"
                 class="collapse show"
                 data-parent="#accordion">
                 <div class="card-body">
                     GeeksforGeeks is a computer
                     science portal. It is the best
                     platform to lean programming.
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header">
                 <a class="collapsed card-link"
                     data-toggle="collapse"
                     href="#description6">
                     Bootstrap
                 </a>
             </div>
             <div id="description6" class="collapse"
                 data-parent="#accordion">
                 <div class="card-body">
                     Bootstrap is free and open-source
                     collection of tools for creating
                     websites and web applications.
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header">
                 <a class="collapsed card-link"
                     data-toggle="collapse"
                     href="#description7">
                     HTML
                 </a>
             </div>
             <div id="description7" class="collapse"
                 data-parent="#accordion">
                 <div class="card-body">
                     HTML stands for HyperText Markup
                     Language. It is used to design
                     web pages using markup language.
                 </div>
             </div>
         </div>
         <div class="card">
             <div class="card-header">
                 <a class="collapsed card-link"
                     data-toggle="collapse"
                     href="#description8">
                     Boots
                 </a>
             </div>
             <div id="description8" class="collapse"
                 data-parent="#accordion">
                 <div class="card-body">
                     Bootstrap is free and open-source
                     collection of tools for creating
                     websites and web applications.
                 </div>
             </div>
         </div>
     </div>
</div> */}
          </div>
        </div>
      </div>
    </>
  );
};
