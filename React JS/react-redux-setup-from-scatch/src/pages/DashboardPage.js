/** Siddharth Kumar Yadav
* © All rights reserved 
*/
import React from 'react';
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux';
import { Table, Tag, Space } from 'antd';
import classes from './DashboardPage.module.css';
import Sidebar from '../components/Sidebar.js';
import Header from '../components/Header.js';
import { getRecords } from '../services';
import { getSavedRecordsAction, postSaveRecordAction, deleteRecordAction } from '../store/actions'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { compose } from 'redux';
import { Pagination } from 'antd';
import { useJwt } from "react-jwt";
import { Menu } from 'antd';
import moment from 'moment';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


export default () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const savedRecords = useSelector(state => state.records.recordsInfo.savedRecords.data);
    const totalPagesSaved = useSelector(state => state.records.recordsInfo.savedRecords.total_pages);
    const { name, email } = useSelector(state => state.auth.userInfo);

    const [current, setCurrent] = React.useState('data')
    const [data, setData] = React.useState([]);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [pageNumberforSaved, setPageNumberforSaved] = React.useState(1);

    const [loading, setLoading] = React.useState(true);

    React.useEffect(async () => {
        setLoading(true);
        fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=f0b56561-432a-4430-8dc0-c6baf11ff726&start=${1 + (pageNumber - 1) * 10}&limit=10&convert=INR`)
            .then(res => res.json())
            .then(({ data }) => {
                console.log(data);
                let a = [];
                data.forEach(el => {
                    a.push({
                        key: el.cmc_rank,
                        circulating_supply: el.circulating_supply,
                        cmc_rank: el.cmc_rank,
                        name: el.name,
                        symbol: el.symbol,
                        market_cap: el.quote.INR.market_cap,
                        percent_change_7d: el.quote.INR.percent_change_7d,
                        percent_change_24h: el.quote.INR.percent_change_24h,
                        action: "Click to save"
                    })
                })
                setData(a);
                setLoading(false);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))


    }, [pageNumber])


    React.useEffect(() => {
        setLoading(true)
        dispatch(getSavedRecordsAction({ page: pageNumberforSaved }, () => {
            setLoading(false);
        }))
    }, [pageNumberforSaved])

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: '#',
            dataIndex: 'cmc_rank',
            key: 'cmc_rank',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '24h%',
            dataIndex: 'percent_change_24h',
            key: 'percent_change_24h',
        },
        {
            title: '7d%',
            dataIndex: 'percent_change_7d',
            key: 'percent_change_7d',
        },
        {
            title: 'Circulating Currency',
            dataIndex: 'circulating_supply',
            key: 'circulating_supply',
        },
        {
            title: 'Market Capital',
            dataIndex: 'market_cap',
            key: 'cmc_rmarket_cap',
        },

    ];


    const handleLogout = () => {
        localStorage.removeItem('tt');
        history.push('/login')
    }

    return <>

        <div>


            <center>
                <h1>Powerstack</h1>
            </center>


            <div style={{ display: 'flex', justifyContent: 'space-around', paddingRight: 20 }}>
                <h4>{name}</h4>
                <h4>{email}</h4>
                <button onClick={() => handleLogout()}>Signout</button>
            </div>


        </div>



        <Menu defaultActiveFirst={['data']} onClick={e => {

            if (e.key === 'saved') {
                dispatch(getSavedRecordsAction({ page: pageNumberforSaved }));
            }

            setCurrent(e.key)
        }} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="data" icon={<MailOutlined />}>
                Data
            </Menu.Item>
            <Menu.Item key="saved" icon={<AppstoreOutlined />}>
                Saved
            </Menu.Item>
        </Menu>



        {current === 'data' ? <div >
            <div>
                <Table loading={loading} columns={[...columns, {
                    title: 'Action',
                    dataIndex: 'action',
                    key: 'action',
                    render: (text, row, idx) => {


                        return <button onClick={() => {

                            setLoading(true);

                            if (data[idx].action === "View Data") {
                                setLoading(true);
                                setTimeout(() => {
                                    setCurrent('saved')
                                }, 100)
                            }
                            let newData = [...data];
                            newData[idx].action = "View Data"
                            setData(newData);
                            console.log("TO BE SEND", row)
                            dispatch(postSaveRecordAction(row, () => {
                                setLoading(false)
                            }))




                        }} className={classes["save-button"]}>{text} </button>
                    }

                }]} dataSource={data} pagination={false} />
            </div>
            <div>
                <center>
                    <Pagination current={pageNumber} onChange={e => setPageNumber(e)} defaultCurrent={1} total={50} />
                </center>
            </div>
        </div> :
            <>
                <div>
                    <Table loading={loading} columns={[{
                        title: 'CMC Rank',
                        dataIndex: 'cmc_rank',
                        key: 'cmc_rank'
                    }, ...columns.splice(1), {
                        title: 'Date of addition',
                        dataIndex: 'createdAt',
                        key: 'createdAt',
                        render: text => <h4>{moment(text).format("MMMM Do YYYY, h:mm:ss a")}</h4>
                    }, {
                        title: 'Action',
                        dataIndex: 'updatedAt',
                        key: 'updatedAt',
                        render: (text, row, idx) => <button

                            onClick={() => {

                                setLoading(true);
                                console.log(row);
                                ;
                                console.log("TO BE SEND", row)
                                dispatch(deleteRecordAction({ recordId: row._id.toString() }, () => {
                                    setLoading(false)
                                }))
                            }}



                            className={classes["remove-button"]}>{"Remove"}</button>
                    }]} dataSource={savedRecords} pagination={false} />
                </div>
                <div>
                    <center>
                        <Pagination current={pageNumberforSaved} onChange={e => setPageNumberforSaved(e)} defaultCurrent={1} total={totalPagesSaved * 10} />
                    </center>
                </div>
            </>}
    </>
}