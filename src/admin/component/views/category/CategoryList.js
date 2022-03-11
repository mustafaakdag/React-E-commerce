import React, { useEffect, useState } from 'react'
import { Table, Spin, Button } from 'antd';
import { baseService } from '../../../../service/baseService'



function CategoryList() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');


    const removeCategory = (id) => {

            baseService.delete('/category',id)
            .then((data) => {
                getCategories();
            })
  
    }

    const columns = [
        {
          title: 'ID',
          dataIndex: '_id',
          key: '_id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Delete',
            dataIndex: '_id',
            key: '_id',
            render: (id) => <Button danger onClick={() => removeCategory(id)}> Delete </Button>
        },
      ];


    useEffect(() => {

        getCategories();

    }, []);

    const getCategories = () => {
        baseService.getAll('/category')
        .then((data) => {
            setCategories(data);
            setLoading(false)
        })
    }

    const searchCategory = () => {

        let newCategoryList = categories.filter(q => q.name == searchText);

        setCategories(newCategoryList)

    }
    return (
        <>
        <Spin tip="Loading..." spinning={loading}>
            <div>
                
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>

            <Button onClick={() => searchCategory()}>Search</Button>
            </div>
         

            <Table dataSource={categories} columns={columns} />
        </Spin>
       
        </>
    )
}

export default CategoryList
