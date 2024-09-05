"use client";
import BaseButton from './BaseButton';

export default function Home() {
    return (
        <div>
            <BaseButton type="primary">Primary</BaseButton>
            <BaseButton type="success">Success</BaseButton>
            <BaseButton type="warning">Warning</BaseButton>
            <BaseButton type="danger">Danger</BaseButton>
        </div>
    );
}