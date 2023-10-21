import { series } from './data.js';
import { promedio_series } from './data.js';
window.onload = () => {
    populateTable();
};
function populateTable() {
    const tableBody = document.querySelector('tbody');
    if (tableBody) {
        // Limpiamos el contenido existente
        tableBody.innerHTML = '';
        //iteramos sobre cada serie en las series capturadas en data.ts
        series.forEach((serie) => {
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            idCell.textContent = serie.id.toString();
            const nameCell = document.createElement('td');
            nameCell.textContent = serie.title;
            const channelCell = document.createElement('td');
            channelCell.textContent = serie.channel;
            const seasonsCell = document.createElement('td');
            seasonsCell.textContent = serie.seasons.toString();
            row.append(idCell, nameCell, channelCell, seasonsCell);
            tableBody.appendChild(row);
        });
    }
    var promedioSeries = document.getElementsByClassName("promedio_series")[0];
    promedioSeries.textContent = `Seasons average: ${promedio_series}`;
}
