import '../styles/description.scss';

export function Description(){
    return (
        <section id='description'>
            <div className='texto'>
                <h1>Dashboard</h1>
                <br />
                <p>Desafio Técnico Frontend</p>
            </div>
            <div>
                <button className='b-filtrar' type="button">Filtrar</button>
            </div>
        </section>
    );
}