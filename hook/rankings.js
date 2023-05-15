import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { REACT_APP_API_KEY } from '@env';

const rankings = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'POST',
    url: 'https://opensea15.p.rapidapi.com/__api/graphql/',
    headers: {
      'content-type': 'application/json',
      'x-signed-query': '44f606da55e882129e8afff8b756e0400519384642b5afd1e8bfe4b7429d6c11',
      'X-RapidAPI-Key': REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'opensea15.p.rapidapi.com',
    },
    data: {
      id: 'RankingsPageTopQuery',
      query:
        'query RankingsPageTopQuery(\n  $chain: [ChainScalar!]\n  $count: Int!\n  $cursor: String\n  $sortBy: CollectionSort\n  $parents: [CollectionSlug!]\n  $createdAfter: DateTime\n) {\n  ...RankingsPageTop_data\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment RankingsPageTop_data on Query {\n  rankings(after: $cursor, chains: $chain, first: $count, sortBy: $sortBy, parents: $parents, createdAfter: $createdAfter) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        relayId\n        ...StatsV2CollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalQuantity\n          totalListed\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n            eth\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n            eth\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n            eth\n          }\n          totalVolume {\n            unit\n            eth\n          }\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment StatsV2CollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n',
      variables: {
        chain: ['ETHEREUM'],
        count: 10,
        cursor: null,
        sortBy: 'ONE_DAY_VOLUME',
        parents: null,
        createdAfter: null,
      },
    },
  };

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data.rankings.edges);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      alert('There is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default rankings;
