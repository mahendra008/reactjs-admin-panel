import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import Constants from '../../Config/constants';

import "./DataTable.scss";

const DataTable = (props) => {

  let grid = props.grid;
  let source = Constants[grid];

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 10});
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
      const fetchData = async () => {
        if (!data.length) {
          setIsLoading(true);
        } else {
          setIsRefetching(true);
        }

        const url = new URL(source.url);
  
        url.searchParams.set('start', `${pagination.pageIndex * pagination.pageSize}`,);
        url.searchParams.set('size', `${pagination.pageSize}`);
        url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
        url.searchParams.set('globalFilter', globalFilter ?? '');
        url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

        try {
          const response = await fetch(url.href);
          const json = await response.json();
          setData(json.data);
          setRowCount(json.meta.totalRowCount);
        } catch (error) {
          setIsError(true);
          console.error(error);
          return;
        }
        setIsError(false);
        setIsLoading(false);
        setIsRefetching(false);
      };
      fetchData();
    }, [columnFilters, globalFilter, pagination.pageIndex, pagination.pageSize, sorting ]);

    const columns = useMemo(() => source.columns, []);

  return (
    <div className='blockCard'>
      <div className="shadowbox">
          <MaterialReactTable
              columns={columns}
              data={data}
              enableTopToolbar={false}
              initialState={{ showColumnFilters: true }}
              manualPagination
              manualSorting
              muiToolbarAlertBannerProps={
              isError ? { color: 'error', children: 'Error loading data', } : undefined
              }
              onColumnFiltersChange={setColumnFilters}
              onGlobalFilterChange={setGlobalFilter}
              onPaginationChange={setPagination}
              onSortingChange={setSorting}
              rowCount={rowCount}
              state={{
              columnFilters,
              globalFilter,
              isLoading,
              pagination,
              showAlertBanner: isError,
              showProgressBars: isRefetching,
              sorting,
              }}
          />
      </div>
      </div>
  )
}

export default DataTable