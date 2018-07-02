import React from "react";
import Link from "gatsby-link";

class Header extends React.Component{
    
    render() {
        return(
            <div>
                <div
                style={{
                    background: "#f5f5f5",
                    marginBottom: "3rem"
                }}
                >
                    <div
                    style={{
                        margin: "0 auto",
                        maxWidth: 980,
                        padding: "1.45rem 1.0875rem",
                        height: 35,
                        background: "#f5f5f5",
                        marginBottom: "3rem"
                    }}
                    >
                        <h1 style={{ margin: 0, textAlign: "left", fontSize: "25px" }}>
                            <div style={{
                                width: "40px",
                                height: "40px",
                                float: "left",
                                position: "relative"
                            }}>  
                                <img src={require('../../images/logo.png')} />
                            </div>
                            <div
                            style={{
                                float: "right",
                                position: "absolute",
                                marginTop: 13,
                                marginLeft: 45,
                                fontfamily: 'Carme'
                            }}
                            >
                                <Link
                                    to="/"
                                    style={{
                                        color: "#FA4343",
                                        textDecoration: "none"
                                }}
                                >
                                    C
                                </Link>
                                <Link
                                    to="/"
                                    style={{
                                        color: "#333",
                                        textDecoration: "none"
                                }}
                                >
                                    ODDITY
                                </Link>
                            </div>
                        </h1>
                    </div>
                </div>
            </div>

            );
    }
}

export default Header;