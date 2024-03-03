'use client'
import { Button, Box } from '@mui/material';
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query"
import { getAds } from '../api/index';
import ListAds from '../components/ListAds';
import SearchForm from '../components/SearchForm';
import styles from './index.module.scss';
import { toast } from "react-toastify"
const Index = () => {
  const [config, setConfig] = useState({
    minPrice: "",
    maxPrice: "",
    search: "",
    city: "",
    district: ""
  })
  const [count, setCount] = useState(1)
  const { data: ads, refetch, isLoading, isFetching, fetchStatus } = useQuery({
    queryKey: ["ads"],
    queryFn: () => getAds(config),
    onError: (error) => {
      if (error) return toast.error('something went error')
    }
  })
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleChange = (event) => setConfig(prev => ({ ...prev, [event.target.name]: event.target.value }));
  const clearValue = () => setConfig({
    minPrice: "",
    maxPrice: "",
    search: "",
    city: "",
    district: ""
  })
  const handleClick = () => {
    if (count === 5) {
      setCount(0)
      return toast.error('server error 500')
    }
    setCount(prev => prev += 1)
    refetch()
  }
  return (
    <div className={styles.container}>
      <Box justifyContent="center" display="flex" gap={"20px"} alignItems="center" paddingY="20px" flexWrap="wrap">
        <h1 className={styles.title}>List of ads</h1>
        <Button disabled={isFetching} onClick={handleClick} variant='outlined'>
          Send an API request
        </Button>
        <Button variant="outlined" onClick={handleOpen}>
          Filter
        </Button>
        <SearchForm onClose={handleClose} open={isOpen} handleChange={handleChange} value={config} clearValue={clearValue} />
      </Box>
      {ads?.results && <ListAds ads={ads} />}
      {isLoading && <h2 className={styles.loading}>Loading</h2>}
    </div>
  );
}

export default Index;
