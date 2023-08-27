import React from 'react'

export const About = () => {
    return (
        <>
            <section className="profile">
                <div className="container hero-principal d-flex flex-column justify-content-center align-items-center">
                    <div className="row">
                        <div className="col">
                            <img className="photo" src="../src/assets/danny.jpg" alt="Foto de Danny Castillo"/>
                        </div>
                        <div className="col presentation">
                            <h1>Hi, I'm Danny Castillo!</h1><br />
                            <h2>Software Design and Development student.</h2>
                            
                        </div>
                    </div>
                </div>
            </section>

            <div className="social-media-container d-flex flex-wrap align-items-center justify-content-center">
                <a href="https://github.com/dannycastilloo" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/dannycastilloo/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="mailto:dannycastillootiniano@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-envelope"></i>
                </a>
            </div>

            <p className="thanks">Thank you for visiting this website.</p>
        </>
    )
}
