package org.jahr.backend.user.model;

import jakarta.persistence.*;
import lombok.Data;
import org.jahr.backend.location.model.Location;

@Data
@Entity
@Table(name = "app_user")
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "email")
    private String email;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

    public AppUser() {
    }

    public AppUser(String email, Location location) {
        this.email = email;
        this.location = location;
    }

}
