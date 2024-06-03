import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1), 
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  borderRadius: '8px',
  transition: 'transform 0.3s, background-color 0.3s, color 0.3s', 
  '&:hover': {
    transform: 'scale(1.05)', 
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', 
    backgroundColor: '#ec7c30', 
    color: '#fff', 
  },
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '80%', padding: '20px' }}>
      <Stack spacing={1}>
      <Item sx={{ fontSize: '16px' }}>
          <b>
            Full Turnkey Telecom Implementation team for Fibre BTS installation,Installation GSM Antennae, MW Link, Electrical, Civil & Infra Equipments.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Construction of roads, flyovers, bridges & hangars.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Tower Site Acquisition from Govt & Private agencies.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Supply and Installation of prefabricated structures.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Tower / Pole Foundation & Erection.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            RF Survey
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Installation of Shelter, Battery Banks, Power Plant, Cable Tray, Power Cabling, Earthing etc.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Fiber Rollout UG, OH, HR - Duct Pulling, OFC Blowing, Splicing, Manhole Installation etc.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Installation of ODF, FAT & OTB
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            GPRS
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Execution of Gas Pipelines projects.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Structured Aerial OFC Laying.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            UG & OH Power Cabling along with Installation of High Tension Transformers.
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Manpower Outsourcing
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            Statutory permissions from all Govt Authorities on PAN India
          </b>
        </Item>
        <Item sx={{ fontSize: '16px' }}>
          <b>
            RWA Permissions
          </b>
        </Item>
      </Stack>
    </Box>
  );
}
