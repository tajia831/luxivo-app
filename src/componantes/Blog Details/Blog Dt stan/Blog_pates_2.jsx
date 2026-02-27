import React from 'react'
import { FaQuoteRight } from "react-icons/fa";

export function Blog_pates_2() {
  return (
    <div className="And-Eurypylus">
        <h4 className="pat-h4">And Eurypylus, son of Euaemon, killed Hypsenor</h4>
        <p className='part-para'>The son of noble Dolopion, who had been made priest of the river Scamander, and was honoured among the people as though he were a god. Eurypylus gave him chase as he was flying before him, smote him with his sword upon the arm, and lopped his strong hand from off it.</p>
        <div className="eur-layout">
            <span className="quo-icon"><FaQuoteRight/></span>
            <p className="layout-p">The bloody hand fell to the ground, and the shades of death, with fate that no man can withstand, came over his eyes. Thus furiously did the battle rage between them. As for the son of Tydeus.</p>
            <p className="layout-p">Jhon Doe</p>
        </div>
        <p className='part-para'>He rushed across the plain like a winter torrent that has burst its barrier in full flood; no dykes, no walls of fruitful vineyards can embank it when it is swollen with rain from heaven</p>
        <div className="bl-details-bot">
            <h5 className="tag-title">Post Tags :</h5>
            <div className="tags-btns">
                <a href="#">Breakfast</a>
                <a href="#">Relax</a>
                <a href="#">Room</a>
            </div>
        </div>
        <div className="part-of-comment">
            <h3 className="pt-reply">Leave a Reply</h3>
            <p className='part-para mb-5'>Your email address will not be published. Required fields are marked *</p>
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="comment-input">
                        <input type="text" placeholder='enter name' />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="comment-input">
                        <input type="email" placeholder='enter email' />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="comment-input">
                        <input type="text" placeholder='enter wedsite' />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="comment-input">
                        <textarea placeholder='enter your comment'></textarea>
                    </div>
                </div>
            </div>
            <a href="#" className="bl-read-btn">post comment</a>
        </div>
    </div>
  )
}

