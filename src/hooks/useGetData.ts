import { useEffect, useState } from "react";

import type { Patient } from "../types/patient";


export const useGetData = () => {

    const [ clients, setClients ] = useState<Patient[]>([])
    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);
    const fetchList = async () => {
        try {
            const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
              headers: {
                  'Authorization': `Basic ${auth}`
              }
          });
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            const json = (await response.json()) as Patient[];
            setClients(json)
          } catch (error) {
            console.error(error instanceof Error ? error.message : error);
          }
    }
    useEffect(() => {
        void fetchList()
    },[])

    return { clients }
  }