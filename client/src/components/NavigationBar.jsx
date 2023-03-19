import React, { Fragment, useState } from 'react';
import ButtonAntd from './ButtonAntd/ButtonAntd';
import Button from './components-object/Button';
import { BellOutlined, CheckCircleOutlined, CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Badge, Col, List, Modal, Row, Tag } from 'antd';

const NavigationBar = () => {

    const [notificationModal, setNotificationModal] = useState(false);

    const notificationList = [
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc elit aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc elit aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
            status: 0,
        },
        {
            id: 2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc elit aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc elit aliquam nisl, eu aliquam nisl nisl sit amet nisl.',
            status: 1,
        },
    ]

    return (
        <Fragment>
            <nav className='nav-bar' id='navBar'>
                <div className="container">
                    <ul className="nav-box nav-box--main">
                        <li className="nav-box-item">
                            <a href="/" className="logo">SmartVot MD</a>
                        </li>
                        <li className="nav-box-item  nav-box-item--large">
                            <ul className="nav-box">
                                <li className="nav__link-item"><a href="#headerStatistics" className="nav__link">Statistică</a></li>
                                <li className="nav__link-item"><a href="#candidates" className="nav__link">Candidat</a></li>
                                <li className="nav__link-item"><a href="#contact" className="nav__link">Contact</a></li>
                            </ul>
                        </li>
                        <li className="nav-box-item">
                            <Button
                                type="vote"
                                name="Votează"
                                id="btn-window"
                            />
                            <Badge
                                count={5}
                            >
                                <ButtonAntd
                                    className="button-antd-notification"
                                    style={{ marginLeft: '10px', }}
                                    type="secondary"
                                    icons={<BellOutlined style={{ fontSize: "24px" }} />}
                                    size="large"
                                    onClick={() => setNotificationModal(actual => !actual)}
                                />
                                {notificationModal &&
                                    <div
                                        style={{ display: "block" }}
                                        className='notification-modal'
                                    >
                                        <div
                                            className='notification-modal-header'
                                        >
                                            <h5 className='notification-modal-title'>
                                                Notification
                                            </h5>
                                            <ButtonAntd
                                                type="text"
                                                style={{ marginRight: '20px' }}
                                                icons={<CloseOutlined style={{ fontSize: "20px" }} />}
                                                onClick={() => setNotificationModal(actual => !actual)}
                                            />
                                        </div>
                                        <div className='notification-modal-body'>
                                            <List>
                                                {notificationList.map((item, index) => (
                                                    <List.Item
                                                        key={index}
                                                    >
                                                        <Row
                                                            gutter={[16, 16]}
                                                            justify="space-between"
                                                        >
                                                            <Col
                                                                span={3}
                                                            >
                                                                {item.status
                                                                    ? <Tag className='tag-icon' icon={<CheckCircleOutlined />} color="success" />
                                                                    : <Tag className='tag-icon' icon={<CloseCircleOutlined />} color="error" />
                                                                }
                                                            </Col>
                                                            <Col
                                                                span={21}
                                                            >
                                                                <p className='notification-list-item'>{item.content}</p>
                                                            </Col>
                                                        </Row>
                                                    </List.Item>
                                                ))}
                                            </List>
                                        </div>
                                    </div>
                                }
                            </Badge>
                        </li>
                    </ul>

                    <ul className="nav-box nav-box--burger">
                        <li className="nav-box-item"><a href="/" className="logo">SmartVot MD</a></li>
                        <li className="nav-box-item">
                            <button className="burger-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default NavigationBar;