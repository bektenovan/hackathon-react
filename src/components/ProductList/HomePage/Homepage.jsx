import React from 'react';

const Homepage = () => {
  return (
    <div>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active d-flex align-items-start">
            {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
            <img src="https://cb2.scene7.com/is/image/CB2/050522_home_bed?wid=1920&qlt=50,0" class="d-block w-100" alt="..." />

            <div class="container">
              <div class="carousel-caption text-start  " >
                <h1 >THE BEST COLLECTIONS</h1>
                <p>Our furniture is handcrafted to be admired and desired, whether that be through form and material or by thoughtful design. </p>
                <p><a class="btn btn-lg btn-pink" href="/register">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
            <img src="https://cb2.scene7.com/is/image/CB2/042222_home_interiors?wid=1920&qlt=40,0&op_sharpen=1" alt="..." class="d-block w-100" />

            <div class="container">
              <div class="carousel-caption">
                <h1>CREATE A POWERFUL WORKSPACE</h1>
                <p> We retain the natural characteristics of our wood and steel to best represent the materials and methods used to handcraft them.</p>
                <p><a class="btn btn-lg " href="/collections">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
            <img src="https://assets.weimgs.com/weimgs/rk/images/dp/ecm/202225/0240/001/001.jpg" alt="..." class="d-block w-100" ></img>
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>LOVED BY HOMEBODIES EVERYWHERE</h1>
                <p>Everything we make is informed by you and crafted with care</p>
                <p><a class="btn btn-lg" href="/about-us">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* 2 */}
      <div class="container marketing ">
        <div class="container d-flex justify-content-center mt-5">


          <div class="row">
            <div class="col-lg-4">
              <img class="circle" src="https://www.cb2.com/blog/wp-content/uploads/2021/09/humble_design_truck_1-640x480.jpg" alt="" width="200" height="200" />
              <h2 class="fw-normal">Fast and free shipping</h2>
              <p>Every single order ships for free. No minimums, no tiers, no fine print whatsoever.</p>
              <p class="btn-circle"><a class="btn" href="/collections">View details »</a></p>
            </div>
            <div class="col-lg-4">
              <img class="circle" src="https://cb2.scene7.com/is/image/CB2/dsn-step-img-2?fmt=jpg&qlt=75,0&wid=556&resMode=sharp2" alt="" width="200" height="200" />
              <h2 class="fw-normal">Modular, easy-to-move design.</h2>
              <p>Our innovative modular design is driven by the belief that furniture should fit this home, and the next one.</p>
              <p class="btn-circle"><a class="btn" href="/collections">View details »</a></p>
            </div>
            <div class="col-lg-4">
              <img class="circle" src="https://www.afydecor.com/blog/wp-content/uploads/2019/01/Carpenter_marking_a_frame_corner-1200x658.jpg" alt="" width="200" height="200" />

              <h2 class="fw-normal">Durable, premium materials.</h2>
              <p>We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather.</p>
              <p class="btn-circle"><a class="btn" href="/collections">View details »</a></p>
            </div>
          </div>
        </div>




        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-5 text">
            <h2 class="featurette-heading fw-normal lh-1">OUTDOOR LIVING BESTSELLERS <h3 class="text-muted">A relaxed blend of blues and naturals.</h3></h2>
            <p class="lead">Clean lines, a compact profile and customizable designs help our Indio Collection fit in anywhere. This versatile, bestselling sectional is crafted from rust-proof aluminum in a slate gray finish for a relaxed-meets-modern vibe.</p>
          </div>
          <div class="col-md-5">
            <img src="https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202203/0057/indio-metal-6-piece-sectional-slate-z.jpg" width="700" height="500"
              alt="" />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 text order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">NEW LIGHTING <h3 class="text-muted">WOOD AND LINEN PENDANT LIGHT.</h3></h2>
            <p class="lead"> Truly the ultimate combination of beauty and comfort that I didn’t think could exist.A Brazilian modern-inspired mix of materials by Studio Anansi, including American walnut and natural linen.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img src="https://cb2.scene7.com/is/image/CB2/121421_marquee_lighting_1?wid=680&qlt=75&resMode=sharp2" alt="" width="500" height="500" />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-5 text" >
            <h2 class="featurette-heading fw-normal lh-1">MODERN INDUSTRIAL STYLE <h3 class="text-muted">PREMIUM WOOD</h3></h2>
            <p class="lead">Mid-century modernism meets industrial materials in our Warren Collection. Crafted to contract-grade standards from kiln-dried wood and finished in rich, rustic tones, our dining table pairs with sleek steel tubing. The minimalist design features a center-leaf extension that accommodates extra guests for entertaining.</p>
          </div>
          <div class="col-md-5">
            <img src="https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202152/0048/warren-extending-dining-table-z.jpg"
              alt="" width="700" height="500" />

          </div>
        </div>

        <hr class="featurette-divider" />


      </div>
    </div>



  );
};

export default Homepage;