import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

function DTable() {
    const [hideDirector, setHideDirector] = React.useState(false);

	const columns = React.useMemo(
		() => [
			{
				name: 'Title',
				selector: row => row.title,
				sortable: true,
			},
			{
				name: 'Director',
				selector: row => row.director,
				sortable: true,
				omit: hideDirector,
			},
			{
				name: 'Year',
				selector: row => row.year,
				sortable: true,
			},
		],
		[hideDirector],
	);

    const data = [
        {
            id: 1,
            title: 'Kongkadoo',
            director: "Kong",
            year: '2022',
        },
        {
            id: 2,
            title: 'Test',
            director: "Kong",
            year: '2021',
        },
    ]

    const customStyles = {
        rows: {
            style: {
                minHeight: '40px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    return (
        <div>
        <button onClick={() => setHideDirector(!hideDirector)}>Hide Directory Column</button>
        
        <DataTable
            columns={columns}
            data={data}
            selectableRows
            customStyles={customStyles}
            pagination
        />
        </div>
    );
};



export default DTable;