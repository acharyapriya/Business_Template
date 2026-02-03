import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './PricingSection.css';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: number;
  period: string;
  features: PricingFeature[];
  highlighted?: boolean;
  badge?: string;
}

const PricingSection: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: 'FREE',
      price: 0,
      period: 'mo.',
      features: [
        { text: '1 users', included: true },
        { text: '5GB storage', included: true },
        { text: 'Unlimited public projects', included: true },
        { text: 'Community access', included: true },
        { text: 'Unlimited private projects', included: false },
        { text: 'Dedicated support', included: false },
        { text: 'Free linked domain', included: false },
        { text: 'Monthly status reports', included: false },
      ],
    },
    {
      name: 'PRO',
      price: 9,
      period: 'mo.',
      badge: '⭐',
      highlighted: true,
      features: [
        { text: '5 users', included: true },
        { text: '5GB storage', included: true },
        { text: 'Unlimited public projects', included: true },
        { text: 'Community access', included: true },
        { text: 'Unlimited private projects', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Free linked domain', included: true },
        { text: 'Monthly status reports', included: false },
      ],
    },
    {
      name: 'ENTERPRISE',
      price: 49,
      period: 'mo.',
      features: [
        { text: 'Unlimited users', included: true },
        { text: '5GB storage', included: true },
        { text: 'Unlimited public projects', included: true },
        { text: 'Community access', included: true },
        { text: 'Unlimited private projects', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'Unlimited linked domains', included: true },
        { text: 'Monthly status reports', included: true },
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="pricing-title">Pay as you grow</h1>
          <p className="pricing-subtitle">With our no hassle pricing plans</p>
        </div>

        <div className="row g-4">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`pricing-card ${tier.highlighted ? 'pricing-card-highlighted' : ''}`}>
                <div className="pricing-header">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="pricing-tier-name">{tier.name}</h3>
                    {tier.badge && <span className="pricing-badge">{tier.badge}</span>}
                  </div>
                  <div className="pricing-price">
                    <span className="currency">$</span>
                    <span className="amount">{tier.price}</span>
                    <span className="period">/ {tier.period}</span>
                  </div>
                </div>

                <ul className="pricing-features list-unstyled">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="pricing-feature">
                      <span className={`feature-icon ${feature.included ? 'included' : 'excluded'}`}>
                        {feature.included ? '✓' : '×'}
                      </span>
                      <span className={`feature-text ${!feature.included ? 'text-muted' : ''}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`btn w-100 ${tier.highlighted ? 'btn-primary' : 'btn-outline-primary'} pricing-cta`}>
                  Choose plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;