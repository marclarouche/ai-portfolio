# Simple Footer Update for Original index.html

## Your Original Footer (Clean Version)

Good news! Your original `index.html` is clean and doesn't have the duplicate footer issue I saw earlier. The file appears to be cut off at line 340, likely missing the closing social links.

## What You Need to Add

### Step 1: Complete Your Footer HTML

Your footer currently ends abruptly at:
```html
<div class="social-links">
    <a href="https://linkedin.com/in/marclarouche">in</a>
```

**Complete it like this:**

```html
    <!-- Footer -->
    <footer>
        <p>&copy; 2026 Marc Larouche. All rights reserved.</p>
        <p>Designed & Built by Marc Larouche</p>
        <div class="social-links">
            <a href="https://linkedin.com/in/marclarouche">in</a>
            <a href="https://github.com/marclarouche">gh</a>
            <a href="https://twitter.com/marclarouche">tw</a>
        </div>
        
        <!-- ADD THIS NEW SECTION -->
        <div class="legal-links">
            <a href="privacy-policy.html">Privacy Policy</a>
            <span>•</span>
            <a href="terms-of-service.html">Terms of Service</a>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

### Step 2: Add CSS to styles.css

Add this at the very end of your `styles.css` file (after line 1024):

```css
/* Legal Links in Footer */
.legal-links {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(20, 255, 236, 0.2);
    font-size: 0.9rem;
}

.legal-links a {
    color: var(--secondary);
    text-decoration: none;
    margin: 0 1rem;
    transition: opacity 0.3s ease;
    font-weight: 500;
}

.legal-links a:hover {
    opacity: 0.7;
}

.legal-links span {
    color: rgba(255, 255, 255, 0.3);
    margin: 0 0.5rem;
}

/* Mobile responsive */
@media (max-width: 640px) {
    .legal-links a {
        display: inline-block;
        margin: 0.5rem 0.75rem;
    }
    
    .legal-links span {
        display: none;
    }
}
```

## That's It!

Two simple additions:
1. ✅ Add the `<div class="legal-links">` section to your footer
2. ✅ Add the CSS at the end of styles.css

The links will automatically match your theme:
- **Background**: Dark teal (`#0A2E36`)
- **Links**: Bright cyan (`#14FFEC`)
- **Border**: Subtle teal line
- **Hover**: Fade effect

## Visual Result

```
┌──────────────────────────────────────────┐
│  © 2026 Marc Larouche                    │
│  Designed & Built by Marc Larouche       │
│                                           │
│  [in]    [gh]    [tw]                    │
│  ─────────────────────────────            │  ← Subtle teal line
│  Privacy Policy  •  Terms of Service     │  ← Bright cyan links
└──────────────────────────────────────────┘
```

No complicated changes, just clean additions to your existing clean code!
