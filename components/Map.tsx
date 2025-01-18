'use client'
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { latLng, LatLngExpression } from 'leaflet'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

interface Props {
  position?: LatLngExpression
  zoom?: number
}

export default function MyMap({
  position = latLng(30.061843416412795, 31.33681001007631),
  zoom = 20,
}: Props) {
  const [offset, setOffset] = useState<[number, number]>([-20, -20])
  const locale = useLocale()

  useEffect(() => {
    function handleResize() {
      if (locale === 'en') {
        setOffset([-20, -20])
      } else {
        setOffset([270, -20])
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [locale])

  return (
    <MapContainer
      className='h-[650px] w-full relative'
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Tooltip permanent direction='top' offset={offset}>
          {locale == 'en' ? (
            <p className='text-xl font-[500] text-white'>
              <span className='font-bold text-xl text-[#47BC8A]'>Digi</span>
              <span className='font-bold'> Fly</span> Company <br /> welcomes
              you
            </p>
          ) : (
            <p className='text-xl font-[500] text-white'>
              شركة{' '}
              <span className='font-bold text-xl text-[#47BC8A]'>ديجى</span>{' '}
              <span className='font-bold'>فلاي</span> ترحب بكم
            </p>
          )}
        </Tooltip>
      </Marker>
    </MapContainer>
  )
}
