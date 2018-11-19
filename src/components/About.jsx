
import React, { Component, Fragment } from 'react';

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <div className="container d-flex flex-column align-items-center">
                    <img src="./images/logo-tsd.jpg"></img>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">O nas</h2>
                                <h5 className="card-subtitle mb-2 text-muted">Tenis Stołowy Dźwiękowy</h5>
                                <p className="card-text">Gra stworzona z myślą o osobach niewidomych. Jej twórcą jest wieloletni pedagog, nauczyciel wychowania fizycznego i rehabilitant Specjalnego Ośrodka Szkolno-Wychowawczego dla Dzieci Niewidomych w Owińskach, Leszek Szmaj.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Sprzęt</h2>
                                <h5 className="card-subtitle mb-2 text-muted">Jaki sprzęt do tenisa stołowego dźwiękowego?</h5>
                                <div className="card-text">
                                <p>Zawody w tenisa stołowego dźwiękowego należy przeprowadzać w pomieszczeniach zamkniętych najlepiej w salach gimnastycznych, halach sportowych oddalonych od zewnętrznych źródeł hałasu typu: ruch uliczny, lotniska, autostrady, głośne obiekty przemysłowe.</p>
                                <p>Do gry potrzebny jest stół do tenisa stołowego (bez siatki) z zaznaczonymi punktami orientacyjnymi wyznaczającymi środki krótszych boków stołu (na krawędzi stołu znak wypukły o: szerokości 5 mm, długości 10 mm, wysokości 0,3 mm) piłeczka do tenisa stołowego, dwa płotki lekkoatletyczne ustawione w odległości 15 cm przed krótszymi bokami stołu (górna krawędź płotka powinna być równa wysokości powierzchni stołu), dwie pary gogli z zaciemnionymi okularami.</p>
                                <p>Aktualnie trwają prace nad projektem nowego stołu do gry, z wykorzystaniem urządzeń elektronicznych, co przyczyni się do uatrakcyjnienia gry i ułatwienia sędziowania.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Zasady gry</h2>
                                <h5 className="card-subtitle mb-2 text-muted">W tenisie stołowym dźwiękowym rozgrywa się zawody indywidualne, deblowe i drużynowe</h5>
                                <div className="card-header">
                                    <strong>Zawody indywidualne</strong>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"> W zawodach indywidualnych gra się do 5 lub do 15 punktów</li>
                                    <li className="list-group-item">Gra ta polega na podawaniu piłeczki za pomocą rąk, w taki sposób, aby ta odbiła się minimum dwukrotnie na polu podającego i nie została złapana przez przeciwnika</li>
                                    <li className="list-group-item">Zawodnik rzuca piłeczkę w taki sposób, aby odbiła się ona najpierw na polu podającego (minimum dwukrotnie), a następnie odbijała się na polu przeciwnika</li>
                                    <li className="list-group-item">Prawidłowa obrona to taka, gdy zawodnik łapiący piłkę nie dotknie łokciami powierzchni stołu i nie pomoże sobie w czasie łapania tułowiem, klatką piersiową, głową, nogami</li>
                                </ul>
                                <div className="card-header">
                                    <strong>Zawody deblowe, mikst</strong>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">W zawodach deblowych i w mikście uczestniczą dwa zespoły, po dwóch zawodników w każdym. Gra się do 5 lub do 15 punktów</li>
                                    <li className="list-group-item">W mikście rywalizują dwuosobowe zespoły, złożone z kobiety i mężczyzny</li>
                                </ul>
                                <div className="card-header">
                                    <strong>Zawody drużynowe</strong>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">3-osobowe drużyny grają systemem sztafetowym, tzn.: kolejna para grających przejmuje wyniki pary poprzedniej</li>
                                    <li className="list-group-item">Kolejne pojedynki następują co 5 punktów, do uzyskania przez jeden z zespołów 45 punktów</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Zasady punktacji</h2>
                                <h5 className="card-subtitle mb-2 text-muted">Kiedy zostaje przyznany punkt?</h5>
                                <div className="card-header">
                                    <strong>Punkt zostaje przyznany gdy:</strong>
                                </div>
                                <ul className="list-group list-group-flush">
                                <li className='list-group-item'>zawodnik nie wykona prawidłowego podania lub obrony</li>
                                <li className='list-group-item'>piłeczka po podaniu przez przeciwnika nie dotknie pola zawodnika odbierającego</li>
                                <li className='list-group-item'>przeciwnik poruszy powierzchnię gry</li>
                                <li className='list-group-item'>wolna ręka w czasie podania dotknie powierzchni gry</li>
                                <li className='list-group-item'>zawodnik podający w czasie podania zakłóci ciszę</li>
                                <li className='list-group-item'>zawodnik nie wykona prawidłowego podania po komendzie sędziego w ciągu 10 sekund</li>
                                <li className='list-group-item'>zawodnik poda piłkę toczoną (piłka przestaje odbijać się na polu odbierającego)</li>
                                </ul>
                            </div>
                        </div>                        
                    </div>
                </div>
            </Fragment>
        );
    }
}