import React from "react";

export function Header() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">BookWithMe</a>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 bwm-search" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 btn-bwm-search" type="submit">Search</button>
                </form>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="">Login <span className="sr-only">test</span></a>
                        <a className="nav-item nav-link" href="">Register</a>
                    </div>

                </div>
            </div>

        </nav>
    )
}