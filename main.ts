import { serie } from './serie';  // Asegurémonos de importar Serie para tener su tipo
import { series } from './data';
import { promedio_series } from './data';

window.onload = () => {
    populateTable();
};

function populateTable(): void {
    const tableBody = document.querySelector('tbody');
    
    if (tableBody) {
        // Limpiamos el contenido existente
        tableBody.innerHTML = '';

        //iteramos sobre cada serie en las series capturadas en data.ts
        series.forEach((serie: serie) => {
            const row: HTMLTableRowElement = document.createElement('tr');

            const idCell: HTMLTableCellElement = document.createElement('td');
            idCell.textContent = serie.id.toString();

            const nameCell: HTMLTableCellElement = document.createElement('td');
            nameCell.textContent = serie.title;

            const channelCell: HTMLTableCellElement = document.createElement('td');
            channelCell.textContent = serie.channel;

            const seasonsCell: HTMLTableCellElement = document.createElement('td');
            seasonsCell.textContent = serie.seasons.toString();

            row.append(idCell, nameCell, channelCell, seasonsCell);
            tableBody.appendChild(row);
        });
    }

    var promedioSeries = document.getElementsByClassName("promedio_series")[0] as HTMLParagraphElement;
    promedioSeries.textContent = `Seasons average: ${promedio_series}`;    
}
