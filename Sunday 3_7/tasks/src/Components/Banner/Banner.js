import React from 'react';
import './Banner.css'

function Banner(){
return(<div>
<div className="bg-img">
      <div className="layer">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Unlimited movies, TV <br/>shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h5>Ready to watch? Let's start the entertainment journey</h5>
          </div>
        </div>

      </div>
    </div>
    <section>
      <div className="container">
        <div className="row align-items-center reverse">
          <div className="col-lg-6">
            <h2>Enjoy on your TV.</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="col-lg-6">
            
            <img className="double-img" src="https://th.bing.com/th/id/R.a5662d6a1e6f5f196c34e2a9f3fabb1c?rik=kYnN5%2fZ%2bPbl0WA&pid=ImgRaw&r=0" height="300px" width="200px"/>
            <img className="double-img" src="https://th.bing.com/th/id/OIP.-ctNmAd2plA0zNUqeHL0DgHaKf?pid=ImgDet&rs=1" height="300px" width="200px"/>

            
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-6">
          <img className="double-img" src="https://th.bing.com/th/id/R.95f1abeef5e26c9db2bc7dcf097a9670?rik=zbgBd7DqO2YN%2bw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fpolls%2f1343000%2f1343453_1392568513235_full.jpg&ehk=3qwfe8n36v3rndkeUd%2fbgpg0IULlsLmsW%2folTqzExcI%3d&risl=&pid=ImgRaw&r=0" height="300px" width="200px"/>
            <img className="double-img" src="https://th.bing.com/th/id/R.7658a5e3898223b26219d799d38a0b66?rik=EJj51kcdGLUz%2fg&pid=ImgRaw&r=0" height="300px" width="200px"/>

          </div>
          <div className="col-lg-6">
            <h2>Download your shows to watch offline.</h2>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
      </div>
    </section>


</div>)
}
export default Banner;