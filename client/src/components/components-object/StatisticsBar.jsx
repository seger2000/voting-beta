import React, { Fragment } from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDress, faPerson } from '@fortawesome/free-solid-svg-icons';

const StatisticsBar = ({ type, data }) => {

    const color = ["warning"]
    function barType(type, data) {
        if (type === "bar") {
            return (
                <div className="header-progress-line">
                    <ProgressBar>
                        {data.map(item => (
                            <ProgressBar variant={color[item.id]} now={(item.votes / item.totals) * 100} key={item.id} />
                        ))}
                    </ProgressBar>
                </div>
            )
        } else if (type === "classificationSex") {
            return (
                <div className="classification-sex-box">
                    <div className="classification-info">
                        <div className="classification-info-item">
                            <div className="classification-info-icon">
                                <FontAwesomeIcon icon={faPersonDress} />
                            </div>
                            <div className="classification-info-statistics">
                                <div className="classification-statistics-title">Femei</div>
                                <div className="classification-statistics-percentages">1.28%</div>
                                <div className="classification-statistics-num">(1000)</div>
                            </div>

                        </div>
                        <div className="classification-info-item df--reverse">

                            <div className="classification-info-icon">
                                <FontAwesomeIcon icon={faPerson} />
                            </div>

                            <div className="classification-info-statistics">
                                <div className="classification-statistics-title">Barbati</div>
                                <div className="classification-statistics-percentages">2.56%</div>
                                <div className="classification-statistics-num">(1000)</div>
                            </div>
                        </div>
                    </div>
                    <div className="header-progress-line">
                        <ProgressBar>
                            {data.map(item => (
                                <ProgressBar variant={color[item.id]} now={(item.votes / item.totals) * 100} key={item.id} />
                            ))}
                        </ProgressBar>
                    </div>
                </div>

            )
        } else if (type === "totalStatistics") {
            return (
                <div className="total-statistics-box">
                    <div className="total-statistics-info">
                        <div className="total-statistics-info-item">
                            <div className="total-statistics-info-subtitle">Prezenta la Vot</div>
                            <div className="total-statistics-info-title">Moldova</div>
                        </div>
                        <div className="total-statistics-info-item">
                            <div className="total-statistics-info-total-pearson">{data.voting}</div>
                            <div className="total-statistics-info-total-proc">{(data.voting / data.total) * 100} %</div> 
                        </div>
                    </div>
                    <div className="total-p">Total Votanti</div>
                    <div className="header-progress-line">
                        <ProgressBar now={(data.voting / data.total) * 100} />
                    </div>
                </div>
                
            )
        }
    }

    return (
        <Fragment>
            {barType(type, data)}
        </Fragment>
    )
}

export default StatisticsBar