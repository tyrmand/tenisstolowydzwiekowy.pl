import React, { Component } from 'react';
import ContactForm from './ContactForm';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    {/* <!-- Page Heading/Breadcrumbs --> */}
                    <h1 className="mt-4 mb-3">Kontakt</h1>
                    <hr />

                    {/* <!-- Content Row --> */}
                    <div className="row">
                        {/* <!-- Contact Details Column --> */}
                        <div className="col-lg-4 mb-4">
                            <p>
                                Leszek Szmaj: <a href="tel:+48-666-610-404" className="insideLink"> 602-582-070</a>
                            </p>
                            <p>
                                Paweł Białek: <a href="tel:+48-604-946-580" className="insideLink">668-336-781</a>
                            </p>
                            <p>
                                E-mail: <a href="mailto:biuro@mitraposadzki.pl">tenis@dzwiekowy.pl</a>
                            </p>
                            <p>
                                {/* <!-- Czynne: Poniedziałek - Piątek: 8:00 do 18:00  --> */}
                            </p>
                        </div>
                    </div>
                    {/* <!-- /.row --> */}

                    {/* <!-- Contact Form --> */}
                    {/* <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. --> */}
                    <div className="row">
                        <div className="col-lg-8 mb-4">
                            <h3>Zostaw wiadomość, skontaktujemy się z Tobą.</h3>
                            <ContactForm/>
                        </div>

                    </div>
                    {/* /.row */}

                </div>
            </div>
        )
    }
}
