import React from 'react';

const AboutUs = () => {
    return (

        <div>
            <div class="col-md-15" >
                <img width="100%" src="https://cdn-flpnm.nitrocdn.com/lvjcfcPSyMNaZjmvgvFeQPxehzGEkFTu/assets/static/optimized/wp-content/uploads/2021/11/f97495d5a7fe1aae1d07088629fb7b1c.P1177259-2-min-copy-min-1-scaled.jpg" alt="" />

                <img width="100%" src="https://cdn-flpnm.nitrocdn.com/lvjcfcPSyMNaZjmvgvFeQPxehzGEkFTu/assets/static/optimized/wp-content/uploads/2021/07/95afb673c5e17b7cbd6d4aab4fdbaf28.fcc.jpg" alt="" />

            </div>
            <hr class="featurette-divider" />

            <div class="row featurette">
                <div class="col-md-5 text-about">
                    <h2 class="featurette-heading fw-normal lh-1">HOME DECOR FOR THE STYLE-OBSESSED <h3 class="text-muted"></h3></h2>
                    <p class="lead">We design and curate the best and latest in interior design, make it accessible, and keep you up-to-date on cutting-edge trends in the industry. That way, you can finally take that #dreamroom from your Pinterest board and make it a reality.</p>
                </div>
                <div class="col-md-5">
                    <img src="https://cb2.scene7.com/is/image/CB2/050522_LF_d_6_left?wid=960&qlt=75,0&resMode=sharp2" width="700" height="500"
                        alt="" />
                </div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette">
                <div class="col-md-7 text-about order-md-2">
                    <h2 class="featurette-heading fw-normal lh-1">WHAT WE DO <h3 class="text-muted"></h3></h2>
                    <p class="lead">Our team of designers and buyers stay far ahead of trends and on-top of what's happening in the industry to bring you the best and latest in furniture, home accessories, and furnishings, including exclusive styles you won't find anywhere else. Our buyers travel the globe to find one-of-a-kind vintage and found items.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img src="https://cb2.scene7.com/is/image/CB2/050522_LF_d_10_left?wid=960&qlt=75,0&resMode=sharp2" alt="" width="500" height="500" />
                </div>
            </div>

            <hr class="featurette-divider" />

            <div class="row featurette">
                <div class="col-md-5 text-about" >
                    <h2 class="featurette-heading fw-normal lh-1">Modular design is the innovative foundation of our furniture<h3 class="text-muted"></h3></h2>
                    <p class="lead">Our big secret? A little bit of inside-the-box thinking. Our first task was to reverse-engineer a luxury sofa to separate into modules, and that ended up unlocking a whole menu of additional benefits.</p>
                </div>
                <div class="col-md-5">
                    <img src="https://cdn-flpnm.nitrocdn.com/lvjcfcPSyMNaZjmvgvFeQPxehzGEkFTu/assets/static/optimized/wp-content/uploads/2022/06/2509d09c0df8681a7389e16aa45381c3.materials-iamgery.jpg"
                        alt="" width="700" height="500" />

                </div>
            </div>

            <hr class="featurette-divider" />
            <div class="info" >
                <div class="row" style={{ width: "900px", marginLeft: "100px", marginTop: "50px" }}>
                    <h2>Do you have any questions? Please write to us or call us on the number.</h2>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Textarea' rows="3"></textarea>
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                    <div class="contacts" style={{ marginTop: "50px" }}>
                        <h5 >📞 Contact Us: 0700000000</h5>
                        <h5>📍 Our Location: 3130 Moon Station Rd.
                            Kennesaw, GA 30144</h5>
                        <h5>📧 Email:admin@gmail.com</h5>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default AboutUs;