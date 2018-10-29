
import React, { Component, Fragment } from 'react';

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <div className="container d-flex flex-column align-items-center">
                    <img src="./images/logo-tsd.jpg"></img>
                    <div>
                        <h1 className="h1">O nas</h1>
                        <p className="p">Tenis stołowy dźwiękowy – gra stworzona z myślą o osobach niewidomych. Jej twórcą jest wieloletni pedagog, nauczyciel wychowania fizycznego i rehabilitant Specjalnego Ośrodka Szkolno-Wychowawczego dla Dzieci Niewidomych w Owińskach, Leszek Szmaj.</p>
                        <h4 className="h4">Sprzęt</h4>
                        <p>
                            Zawody w tenisa stołowego dźwiękowego należy przeprowadzać w pomieszczeniach zamkniętych najlepiej w salach gimnastycznych, halach sportowych oddalonych od zewnętrznych źródeł hałasu typu: ruch uliczny, lotniska, autostrady, głośne obiekty przemysłowe.
                            Do gry potrzebny jest stół do tenisa stołowego (bez siatki) z zaznaczonymi punktami orientacyjnymi wyznaczającymi środki krótszych boków stołu (na krawędzi stołu znak wypukły o: szerokości 5 mm, długości 10 mm, wysokości 0,3 mm) piłeczka do tenisa stołowego, dwa płotki lekkoatletyczne ustawione w odległości 15 cm przed krótszymi bokami stołu (górna krawędź płotka powinna być równa wysokości powierzchni stołu), dwie pary gogli z zaciemnionymi okularami.
                            Aktualnie trwają prace nad projektem nowego stołu do gry, z wykorzystaniem urządzeń elektronicznych, co przyczyni się do uatrakcyjnienia gry i ułatwienia sędziowania.
                    </p>
                        <h4 className="h4">Zasady gry</h4>
                        <p>W tenisie stołowym dźwiękowym rozgrywa się zawody indywidualne, deblowe i drużynowe.</p>
                        <h5>Zawody indywidualne</h5>
                        W zawodach indywidualnych gra się do 5 lub do 15 punktów.

                        Gra ta polega na podawaniu piłeczki za pomocą rąk, w taki sposób, aby ta odbiła się minimum dwukrotnie na polu podającego i nie została złapana przez przeciwnika.

                        Zawodnik rzuca piłeczkę w taki sposób, aby odbiła się ona najpierw na polu podającego (minimum dwukrotnie), a następnie odbijała się na polu przeciwnika. Prawidłowa obrona to taka, gdy zawodnik łapiący piłkę nie dotknie łokciami powierzchni stołu i nie pomoże sobie w czasie łapania tułowiem, klatką piersiową, głową, nogami.

                    <h5>Zawody deblowe, mikst</h5>
                        W zawodach deblowych i w mikście uczestniczą dwa zespoły, po dwóch zawodników w każdym. Gra się do 5 lub do 15 punktów. W mikście rywalizują dwuosobowe zespoły, złożone z kobiety i mężczyzny.

                    <h5>Zawody drużynowe</h5>
                        3-osobowe drużyny grają systemem sztafetowym, tzn.: kolejna para grających przejmuje wyniki pary poprzedniej. Kolejne pojedynki następują co 5 punktów, do uzyskania przez jeden z zespołów 45 punktów.

                    <h5>Zasady punktacji</h5>

                        <div>
                            <ul className='list-group'>
                            <li className='list-group-item list-group-item-dark'>Punkt zostaje przyznany, gdy:</li>
                            <li className='list-group-item list-group-item'>zawodnik nie wykona prawidłowego podania lub obrony</li>
                                <li className='list-group-item list-group-item'>piłeczka po podaniu przez przeciwnika nie dotknie pola zawodnika odbierającego</li>
                                <li className='list-group-item list-group-item'>przeciwnik poruszy powierzchnię gry</li>
                                <li className='list-group-item list-group-item'>wolna ręka w czasie podania dotknie powierzchni gry</li>
                                <li className='list-group-item list-group-item'>zawodnik podający w czasie podania zakłóci ciszę</li>
                                <li className='list-group-item list-group-item'>zawodnik nie wykona prawidłowego podania po komendzie sędziego w ciągu 10 sekund</li>
                                <li className='list-group-item list-group-item'>zawodnik poda piłkę toczoną (piłka przestaje odbijać się na polu odbierającego)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}