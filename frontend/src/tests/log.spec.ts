import {  setActivePinia, createPinia } from 'pinia';
import { useLogStore } from '../stores/log';
import axios from "axios";
import { logMock } from './mocks/log.mock';
import { SAVE } from '../stores/log/contants';

jest.mock("axios");
const formData = {
  categorySelected: 1,
  message: 'Test'
}

describe('UseLogStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('Should Fetch Logs', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue(logMock);
    const log = useLogStore();
    await log.fetchLogs();
    const expected = logMock.data.data;
    expect(log.logs).toEqual(expected);
  })

  it('Should Add Logs', async () => {
    const axiosMock = jest.spyOn(axios, 'post').mockResolvedValue(logMock);
    const log = useLogStore();
    await log.addLog(formData);
    expect(axiosMock).toHaveBeenCalledTimes(1);
    expect(axiosMock).toBeCalledWith(SAVE,{payload:formData});
  })

  it('Should Add Logs set Log empty', async () => {
    const mock = { data: {"success":true,"message":"Respuesta Exitosa","data":[]}};
    jest.spyOn(axios, 'post').mockResolvedValue(mock);
    const log = useLogStore();
    await log.addLog(formData);
    expect(log.logs).toEqual([]);
  })

})