import React from 'react';
import './content.scss';
import Signup from '../Signup/Signup';


import sedan from '../../widgetImages/sedan_grey.jpeg'
import coupe from '../../widgetImages/coupe-removebg-preview.png'
import truck from '../../widgetImages/truck_grey.png'
import suv from '../../widgetImages/suv_grey.jpg'
import van from '../../widgetImages/grey_minivan.png'
import sport from '../../widgetImages/grey_sports.png'
import luxury from '../../widgetImages/lux_grey-removebg-preview.png'
import convertible from '../../widgetImages/convertable_grey-removebg-preview.png'
import crossover from '../../widgetImages/crossover_grey-removebg-preview.png'
import hatchback from '../../widgetImages/grey_hatchback-removebg-preview.png'
import hybrid from '../../widgetImages/hybrid_grey-removebg-preview.png'
import motorcycle from '../../widgetImages/motorcycle1.png'


const Content=() => {

  const data=(
  	<div className="box">
  		<h2>My div content </h2>
  	</div>
  )
  return (
    <main className="content">
	    {/*Searching tool centered with the background image div*/}
		<div class="bgImage">
            <div class="search">
              <div class="s007">
                <form>
                  <div class="inner-form">
                    <div class="basic-search">
                      <div class="input-field">
                        
                        <input id="search" type="text" placeholder="Search..." />
                        <div class="result-count">
                          <span>108 </span>results</div>
                      </div>
                    </div>
                    <div class="advance-search">
                      <span class="desc">Advanced Search</span>
                      <div class="row">
                        <div class="input-field">
                          <div class="input-select">
                            <select data-trigger="" name="choices-single-defaul">
                              <option placeholder="" value="">Type</option>
                              <option>Sedan</option>
                              <option>SUV</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                        <div class="input-field">
                          <div class="input-select">
                            <select data-trigger="" name="choices-single-defaul">
                              <option placeholder="" value="">Make</option>
                              <option>Sedan</option>
                              <option>SUV</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                        <div class="input-field">
                          <div class="input-select">
                            <select data-trigger="" name="choices-single-defaul">
                              <option placeholder="" value="">Year</option>
                              <option> Less than 2000</option>
                              <option>2000-2010</option>
                              <option>2010 - 2015</option>
                              <option>2015 or Greater </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row second">
                        <div class="input-field">
                          <div class="input-select">
                            <select data-trigger="" name="choices-single-defaul">
                              <option placeholder="" value="">Mileage</option>
                              <option> Less than 50,000</option>
                              <option>50,000 - 100,000</option>
                              <option>100,000 - 200,000</option>
                              <option>200,000+</option>
                            </select>
                          </div>
                        </div>
                        <div class="input-field">
                          <div class="input-select">
                            <select data-trigger="" name="choices-single-defaul">
                              <option placeholder="" value="">Price</option>
                              <option>Less than $5000</option>
                              <option>$5000 - $10,0000</option>
                              <option>$10,000 - $20,000</option>
                              <option>$20,000 +</option>
                            </select>
                          </div>
                        </div>
                        <div class="input-field">
                          <button class="btn-search">Search</button>
                          <button class="btn-delete" id="delete">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>{/*This templates was made by Colorlib (https://colorlib.com)*/}
              </div>
            </div>
          </div>
          

          {/*About section */}
          <div class="about">
            <div class="content">
              <div class="head"> <h2 class="carBrowse">Our Message</h2></div>
              <div class="p">
                <p>At outhedoor our mission is to take the guessing out of what the total price of the vehicle will be. We provide a total or “out the door” price for consumers so there are no surprises when they walk into the dealer. The price displayed will include taxes, registration, title fees, dealer fees or other fees associated with the purchase of the vehicle.
                *finance fees, apr and third party purchases such as warranties are not included, as these are charged or bought after the vehicle has been purchased.The outhedoor price is our most accurate estimation and is not a gurantee.</p>
              </div>
            </div>
          </div>

          

          {/*Brosw Section */}
          <h2 class="carBrowse">Browse Car Types</h2>
          <div class="carType"></div>
          <div class="container">
            <div class="div1">
              <a class="a" href="">
                <figure>
                  <img className="imgCar" src={sedan} alt="" width="400px"></img>
                  <figcaption>
                    Sedan
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={coupe} alt="" width="400px"></img>
                  <figcaption>
                    Coupe
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={truck} alt="" width="400px"></img>
                  <figcaption>
                    Truck
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={suv} alt="" width="400px"></img>
                  <figcaption>
                    SUV
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={van} alt="" width="400px"></img>
                  <figcaption>
                    Van/Minivan
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={sport} alt="" width="400px"></img>
                  <figcaption>
                    Sport
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={luxury} alt="" width="400px"></img>
                  <figcaption>
                    Luxury
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={convertible} alt="" width="400px"></img>
                  <figcaption>
                    Convertible
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={crossover} alt="" width="400px"></img>
                  <figcaption>
                    Crossover
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={hatchback} alt="" width="400px"></img>
                  <figcaption>
                    Hatchback
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={hybrid} alt="" width="400px"></img>
                  <figcaption>
                    Hybrid
                  </figcaption>
                </figure>
              </a>
              <a class="a" href="">
                <figure>
                  <img class="imgCar" src={motorcycle} alt="" width="400px"></img>
                  <figcaption>
                    Motorcycle
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
          
    </main>
    
  )
}

export default Content;