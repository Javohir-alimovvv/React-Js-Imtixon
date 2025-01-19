import React, { memo } from 'react'
import "./Brand.scss"

const Brand: React.FC = () => {
    return (
        <>

            <div id="container">
                <div className="dress__style">
                    <h2 className="dress__title">BROWSE BY DRESS STYLE</h2>
                    <div className="dress__grid">
                        <div className="dress__card">
                            <span className="dress__label">Casual</span>
                        </div>
                        <div className="dress__card__2">
                            <span className="dress__label">Formal</span>
                        </div>
                        <div className="dress__card__3">
                            <span className="dress__label">Party</span>
                        </div>
                        <div className="dress__card__4">
                            <span className="dress__label">Gym</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default memo(Brand)