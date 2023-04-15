import React from 'react'
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material';
import {useSelector} from 'react-redux'
const List = () => {
    const data = useSelector((state)=>state.data);
    return (
        <>
            <TableContainer sx={{ maxHeight: '300px' }} component={Paper}>
                <Table stickyHeader aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>User Name</TableCell>
                            <TableCell >Tenant Id</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.data?.length > 0 ? data.data.map(row => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.tenant_id}</TableCell>
                            </TableRow>
                        )):(
                        <TableRow>
                            <TableCell> Sorry We Can't Any Get Any Data</TableCell>
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default List