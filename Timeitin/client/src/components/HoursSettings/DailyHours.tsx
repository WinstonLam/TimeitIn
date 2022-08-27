import React, { useMemo } from "react";
import { useTable } from 'react-table'


import "../Styles/HoursSettings.css";

const DailyHours = ({ hours }: any) => {
    const data = useMemo(() => {
        const list: any = [];
        if (hours) {
            Object.keys(hours).forEach(function (key) {
                const time = hours[key].time.split(",");
                if (time.length < 2) {
                    list.push({ name: key, startTime: time[0] })
                } else {
                    list.push({ name: key, startTime: time[0], endTime: time[1] })
                };
            });
        }
        return list;
    }, [hours]);

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'Start Time',
                accessor: 'startTime',
            },
            {
                Header: 'End Time',
                accessor: 'endTime',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <table className="daily-hours-table" {...getTableProps()} >
            <thead>
                {headerGroups.map((headerGroup, idx) => (
                    <>
                        <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}

                        </tr>
                        <hr />
                    </>))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, idx) => {
                    prepareRow(row)
                    return (
                        <>
                            <tr key={idx} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                            <hr />
                        </>
                    )
                })}
            </tbody>
        </table>
    )
}

export default DailyHours;