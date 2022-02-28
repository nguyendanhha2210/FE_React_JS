import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss';
import '../HomePage.scss';
import Slider from "react-slick";

class OutStandingDoctor extends Component {

    render() {
        return (
            <div className='section-share section-outStanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật</span>
                        <button className='btn-section'>Xem Thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outStanding-doctor' ></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ 1</div>
                                        <div>Cơ Xương Khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outStanding-doctor' ></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ 1</div>
                                        <div>Cơ Xương Khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outStanding-doctor' ></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ 1</div>
                                        <div>Cơ Xương Khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outStanding-doctor' ></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ 1</div>
                                        <div>Cơ Xương Khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outStanding-doctor' ></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ 1</div>
                                        <div>Cơ Xương Khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outStanding-doctor' ></div>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Bác sĩ 1</div>
                                        <div>Cơ Xương Khớp</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
