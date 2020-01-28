import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.png" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>안녕하세요, UX 디자인 실무경험을 바탕으로 프론트엔드 개발을 하고 있는 조혜란입니다 .
                           시멘틱 마크업과 클린코드를 선호하고, 주로 사용하는 언어는 Scss, JavaScript, PHP입니다.
                           캐나다 웹에이젼시에서 유명 클라이언트(Pepsi, Rogers, Merck)와의 다양한 작업 경험을 통하여 SEO, 크로스 브라우징, 반응형 웹사이트를 정확하고 빠르게 제작가능합니다.
                           최근 React에 관심이 많고 개인 프로젝트를 진행중입니다.
                        </p>
                        <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                            <span>Raina Cho</span><br />
                            <span>32, Dasan-ro, Jung-gu, Seoul<br />
                                  Republic of Korea
                            </span><br />
                            <span>(+82)10-3433-2068</span><br />
                            <span>chohr82@gmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                            <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                            </p>
                        </div>
                        </div> {/* end row */}
                    </div> {/* end .main-col */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default About;