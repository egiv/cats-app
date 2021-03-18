import React from 'react';
import {Button, Card, List, notification} from 'antd';
import LazyLoad from 'react-lazyload';
import {fetchCats} from "../../utils/cats-api.util";
import SmallSpin from "../SmallSpin";

import classNames from 'classnames';

import './Cats.css';

const Cats = () => {
    const [cats, setCats] = React.useState([]);
    const [isSmall, setIsSmall] = React.useState(false);
    const [isFetching, setIsFetching] = React.useState(false);

    React.useEffect(() => {
        setIsFetching(true);
        fetchCats(100, '/images/search')
            .then((response) => {
                notification.success({
                    message: 'Статус загрузки',
                    description: 'Коты загрузились успешно',
                });
                setCats(response);
            })
            .catch((e) => console.error(e))
            .finally(() => setIsFetching(false))
    }, []);

    const toggleSizeImage = () => {
        setIsSmall((prevState => !prevState));
    }

    const imageClassNames = React.useMemo(() => {
        return classNames({
            image: true,
            'image_small': isSmall
        });
    }, [isSmall])

    if (isFetching) {
        return <SmallSpin />
    }

    return (
        <>
            <Button onClick={toggleSizeImage}>Поменять размер</Button>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={cats}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>
                            <LazyLoad height={200} once className="wrapper">
                                <img
                                    className={imageClassNames}
                                    src={item.url}
                                    alt="Изображение котика"
                                />
                            </LazyLoad>
                        </Card>
                    </List.Item>
                )}
            />
        </>
    );
};

export default Cats;
