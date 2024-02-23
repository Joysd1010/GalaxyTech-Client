import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailPage = () => {
const laptop=useLoaderData()
console.log(laptop)
// --------------------------------------------declaring all  the variables and functions---------------------------
const {specialFeatures,discountedPrice,emiPrice,regularPrice,storage,ram,brand,generation,display,cache,modelname}=laptop?.keyFeatures
const {  model,  clockSpeed, core, thread,  } = laptop?.processor;
const { size, resolution, displayFeatures } = laptop?.display;
const { ramSize, ramFrequency, ramType, totalRamSlots, maxRamCapacity, storageType, storageSize, ssdSlot, extraSsdSlot, readSpeed, writeSpeed } = laptop?.memory;
const {  memorySize, memoryType } = laptop?.graphics;//brand, model, is not included 
const { keyboardFeatures, touchpadFeatures } = laptop?.keyboard;
const { webcamFeature, audioFeature } = laptop?.camera;
const { opticalDrive, hdmiFeature, usbFeatures, headphonePort, audioPort, ioPorts } = laptop?.ports;
const { speakerFeature, microphoneFeature } = laptop?.audio;
const { lanDetails, wifiDetails, bluetoothDetails } = laptop?.network;
const { color, weight, thickness, dimensions } = laptop?.physicalDetails;
const { capacity, adapterWatt, adapterType } = laptop?.batteryDetails;
const { os, architecture } = laptop?.osDetails;
const { warrantyPeriod, warrantyType } = laptop?.warrantyDetails;

// -----------------------------------------all handlers  are in this file------------------------------


    return (
        <div>
            <div>
                <div><img src="" alt="" /></div>
            </div>
            
        </div>
    );
};

export default DetailPage;